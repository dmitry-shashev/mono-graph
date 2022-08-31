import React, { FC, ReactElement, useState } from 'react'
import styles from './Tabs.module.scss'
import clsx from 'clsx'

interface Props {
  currentIndex?: number
  titles: Array<string>
  children: Array<ReactElement>
}

export const Tabs: FC<Props> = ({ currentIndex = 0, children, titles }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(currentIndex)

  return (
    <div className={styles.wrap}>
      <div className={styles.tabsHeaders}>
        {titles.map((title, index) => (
          <button
            onClick={() => setSelectedIndex(index)}
            type="button"
            className={clsx(styles.tabTitle, {
              [styles.activeTabTitle ?? 0]: selectedIndex === index,
            })}
          >
            {title}
          </button>
        ))}
      </div>

      {React.Children.map(children, (elem, index) => (
        <div
          className={clsx(styles.tabContent, {
            [styles.activeTab ?? 0]: selectedIndex === index,
          })}
          key={index}
        >
          {elem}
        </div>
      ))}
    </div>
  )
}
