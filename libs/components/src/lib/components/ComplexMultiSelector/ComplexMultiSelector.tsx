import React, { FC, useState } from 'react'
import styles from './ComplexMultiSelector.module.scss'
import { StrHelper, Value, ValueHelper } from '@mono-graph/core'
import clsx from 'clsx'

interface Props {
  possible: ReadonlyArray<Value>
  selected: ReadonlyArray<Value>
  onChange: (newSelected: Array<Value>) => void
  topLabel: string
  hideSelectAll?: boolean
  singleMod?: boolean
  showDetails?: boolean
  onDetails?: () => void
}

export const ComplexMultiSelector: FC<Props> = ({
  possible,
  selected,
  onChange,
  topLabel,
  singleMod,
  hideSelectAll,
  showDetails,
  onDetails,
}) => {
  const [search, setSearch] = useState<string>('')

  const onSelectAll = (newValue: boolean): void => {
    const valueToSend = newValue ? [...possible] : []
    onChange(valueToSend)
  }

  const onChangeInner = (currentElem: Value) => (): void => {
    if (singleMod) {
      onChange([currentElem])
      return
    }
    const newSelected = selected.filter((v) => v.value !== currentElem.value)
    if (newSelected.length === selected.length) {
      newSelected.push(currentElem)
    }
    onChange(newSelected)
  }

  const hideCheckboxes = singleMod || hideSelectAll
  const filteredPossible = StrHelper.applyFilterToCollection(
    possible,
    search,
    ValueHelper.labelSelector
  ).filter((v) => !!v.value)
  return (
    <div
      className={clsx(styles.wrap, {
        [styles.singleMod ?? '']: singleMod,
      })}
    >
      <div className={styles.titleWrap}>
        <div className={styles.labelWrap}>
          <input
            hidden={hideCheckboxes}
            type="checkbox"
            checked={selected.length === possible.length}
            onChange={(e) => onSelectAll(e.target.checked)}
          />
          <span className={styles.label}>{topLabel}</span>
        </div>
        <div className={styles.searchWrap}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`defaultInput ${styles.filterInput}`}
            type="text"
            placeholder="Filter..."
            aria-label="Filter input"
          />
          {showDetails && (
            <button
              disabled={selected.length === 0}
              onClick={onDetails}
              className={styles.detailsBtn}
              type="button"
              aria-label="Details button"
            />
          )}
        </div>
      </div>

      <div className={styles.contentWrap}>
        {filteredPossible
          .filter((v) => StrHelper.isSubstring(v.label ?? '', search))
          .map((elem, index) => (
            <div
              style={{
                color: elem.color ?? 'initial',
              }}
              onClick={onChangeInner(elem)}
              className={clsx(styles.contentRow, {
                [styles.contentRowSelected ?? '']: ValueHelper.includes(
                  selected,
                  elem
                ),
              })}
            >
              <input
                hidden={hideCheckboxes}
                checked={ValueHelper.includes(selected, elem)}
                onChange={onChangeInner(elem)}
                type="checkbox"
                aria-label="Selector checkbox"
                data-testid={`cms-${index}`}
              />
              <div>{elem.label}</div>
            </div>
          ))}
      </div>
    </div>
  )
}
