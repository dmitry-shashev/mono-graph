import React, { FC, useEffect, useId, useState } from 'react'
import styles from './AutoComplete.module.scss'
import { StrHelper, Value } from '@mono-graph/core'

interface Props {
  possible: Array<Value>
  selected?: Value | undefined
  placeholder?: string
  disabled?: boolean
  onChange: (newValue: Value | undefined) => void
}

export const AutoComplete: FC<Props> = ({
  possible,
  selected,
  placeholder,
  disabled,
  onChange,
}) => {
  const inputId = useId()
  const selectId = useId()
  const [inputValue, setInputValue] = useState<string>(
    String(selected?.value ?? '')
  )
  const [showSelect, setShowSelect] = useState<boolean>(false)
  const [shouldApplyFiltration, setShouldApplyFiltration] =
    useState<boolean>(false)

  useEffect(() => {
    if (!selected?.value) {
      setInputValue('')
    } else {
      setInputValue(String(selected?.label ?? selected?.value ?? ''))
    }
  }, [selected])

  // filtered data
  let possibleFiltered = possible
  if (shouldApplyFiltration) {
    possibleFiltered = possible.filter((v) =>
      StrHelper.isSubstring(String(v.label ?? v.value ?? ''), inputValue)
    )
  }
  const showSelectFinal = showSelect && possibleFiltered.length > 0

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const found = possible.find(
      (v) => String(v.value) === String(e.target.value)
    )
    setShowSelect(false)
    if (found?.value) {
      onChange(found)
    } else {
      onChange(undefined)
    }
  }

  const onSelectBlur = (e: React.FocusEvent<HTMLSelectElement>): void => {
    // ignore for select
    if (e.relatedTarget?.id === inputId) {
      return
    }
    setShowSelect(false)
    setInputValue(String(selected?.value ?? ''))
  }

  const onInputFocus = (): void => {
    setShouldApplyFiltration(false)
    setShowSelect(true)
  }

  const onInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && showSelectFinal) {
      const valueToSet = possibleFiltered.find((v) => v.value)
      setShowSelect(false)
      // we have to run it - because onChange does not work in case of
      // selecting the same value for the second time
      setInputValue(String(valueToSet?.label ?? selected?.value ?? ''))
      onChange(valueToSet)
      return
    }

    if (e.key === 'Escape') {
      setInputValue(String(selected?.label ?? selected?.value ?? ''))
      setShowSelect(false)
      return
    }

    // TODO: add arrow navigation
    // if (e.key === 'ArrowDown') {
    //   return
    // }

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
      StrHelper.isSubstring(String(v.label ?? v.value ?? ''), inputValue)
    )
    if (found) {
      setShowSelect(false)
      onChange(found)
      return
    }
    // simple reset
    setInputValue(String(selected?.label ?? selected?.value ?? ''))
  }

  const onInputClick = (): void => {
    setShouldApplyFiltration(false)
    setShowSelect(true)
  }

  // determine the placeholder
  let finalPlaceholder = placeholder
  if (!placeholder) {
    const foundEmpty = possible.find((v) => !v.value)
    if (foundEmpty) {
      finalPlaceholder = String(foundEmpty.label ?? foundEmpty.value)
    }
  }

  return (
    <div className={styles.wrap}>
      <input
        id={inputId}
        onClick={onInputClick}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onKeyUp={onInputKeyUp}
        className={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={disabled}
        placeholder={finalPlaceholder}
        aria-label="Autocomplete text input"
        autoComplete="off"
        type="text"
      />

      {showSelectFinal && (
        <select
          id={selectId}
          className={styles.select}
          value={selected?.value}
          onChange={onSelectChange}
          onBlur={onSelectBlur}
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
