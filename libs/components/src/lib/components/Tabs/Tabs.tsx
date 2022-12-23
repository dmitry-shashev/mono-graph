import React, { FC, ReactElement, useState } from 'react'
import styles from './Tabs.module.scss'
import clsx from 'clsx'
import { ArrHelper } from '@mono-graph/core'

interface Props {
  currentTab: number
  onTabChange?: (value: number) => void
  titles: ReadonlyArray<string>
  children: Array<ReactElement> | ReactElement
  className?: string
  behavior?: 'loadAll' | 'reloadActive' | 'rememberLoaded'
}

export const Tabs: FC<Props> = ({
  currentTab,
  onTabChange,
  titles,
  children,
  className = '',
  behavior = 'loadAll',
}) => {
  const [visited, setVisited] = useState<ReadonlyArray<number>>([currentTab])

  const onTabChangeInner = (newTab: number) => (): void => {
    onTabChange?.(newTab)
    setVisited(ArrHelper.addUnique(newTab, visited))
  }

  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={styles.tabsHeaders}>
        {titles.map((title, index) => (
          <button
            key={title}
            aria-label={`Go to tab - ${title}`}
            onClick={onTabChangeInner(index)}
            type="button"
            className={clsx(styles.tabTitle, {
              [styles.activeTabTitle ?? 0]: currentTab === index,
            })}
          >
            {title}
          </button>
        ))}
      </div>

      {'loadAll' === behavior && (
        <>
          {React.Children.map(children, (elem, index) => (
            <div
              className={styles.tabContent}
              hidden={currentTab !== index}
              aria-label={`Tab content for - ${titles[index]}`}
              key={index}
            >
              <div className={styles.tabContentInner}>{elem}</div>
            </div>
          ))}
        </>
      )}

      {'reloadActive' === behavior && (
        <>
          {React.Children.map(children, (elem, index) => (
            <div
              className={styles.tabContent}
              hidden={currentTab !== index}
              aria-label={`Tab content for - ${titles[index]}`}
              key={index}
            >
              <div className={styles.tabContentInner}>
                {currentTab === index && <>{elem}</>}
              </div>
            </div>
          ))}
        </>
      )}

      {'rememberLoaded' === behavior && (
        <>
          {React.Children.map(children, (elem, index) => (
            <div
              className={styles.tabContent}
              hidden={currentTab !== index}
              aria-label={`Tab content for - ${titles[index]}`}
              key={index}
            >
              <div className={styles.tabContentInner}>
                {visited.includes(index) && <>{elem}</>}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
