import React, { FC, useId, useState } from 'react'
import styles from './AutoComplete.module.scss'
import { StrHelper, Value } from '@mono-graph/core'

interface Props {
  possible: Array<Value>
  selected?: Value | undefined
  onChange: (newValue: Value | undefined) => void
}

export const AutoComplete: FC<Props> = ({ possible, selected, onChange }) => {
  const selectId = useId()
  const [inputValue, setInputValue] = useState<string>(
    String(selected?.value ?? '')
  )
  const [showSelect, setShowSelect] = useState<boolean>(false)
  const [shouldApplyFiltration, setShouldApplyFiltration] =
    useState<boolean>(false)

  // filtered data
  let possibleFiltered = possible
  if (shouldApplyFiltration) {
    possibleFiltered = possible.filter((v) =>
      StrHelper.isSubstring(String(v.label ?? v.value ?? ''), inputValue)
    )
  }
  const showSelectFinal = showSelect && possibleFiltered.length > 0

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const found = possible.find((v) => v.value === e.target.value)
    setShowSelect(false)
    setInputValue(String(found?.value ?? ''))
    onChange(found)
  }

  const onInputFocus = (): void => {
    setShouldApplyFiltration(false)
    setShowSelect(true)
  }

  const onInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && showSelectFinal) {
      const valueToSet = possibleFiltered[0]
      setInputValue(String(valueToSet?.value ?? ''))
      setShowSelect(false)
      onChange(valueToSet)
      return
    }

    if (e.key === 'Escape') {
      setInputValue(String(selected?.value ?? ''))
      setShowSelect(false)
      return
    }

    setShouldApplyFiltration(true)

    if (!showSelect && possibleFiltered.length > 0) {
      setShowSelect(true)
    }
  }

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    // ignore for select
    if (e.relatedTarget?.id === selectId) {
      return
    }
    // close the select in any case
    setShowSelect(false)
    // if nothing is changed
    if (selected?.value === inputValue) {
      return
    }
    // also if the user input "two" instead of "Two"
    const found = possible.find((v) =>
      StrHelper.isSubstring(String(v.value ?? ''), inputValue)
    )
    if (found) {
      setInputValue(String(found?.value ?? ''))
      setShowSelect(false)
      onChange(found)
      return
    }
    // simple reset
    setInputValue(String(selected?.value ?? ''))
  }

  const onInputClick = (): void => {
    setShouldApplyFiltration(false)
    setShowSelect(true)
  }

  return (
    <div className={styles.wrap}>
      <input
        onClick={onInputClick}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onKeyUp={onInputKeyUp}
        className={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
        aria-label="Autocomplete text input"
        type="text"
      />

      {showSelectFinal && (
        <select
          id={selectId}
          className={styles.select}
          value={selected?.value}
          onChange={onSelectChange}
          size={4}
          aria-label="Autocomplete dropdown"
        >
          {possibleFiltered.map((elem) => (
            <option key={String(elem.label ?? elem.value)} value={elem.value}>
              {elem.label ?? elem.value}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}
