import { useState } from 'react'

type onDataChangeType<T> = (elem: T, value: boolean) => void
type onDataChangeAllType = (value: boolean) => void

interface UseSelectedDataResult<T> {
  selectedData: Array<T>
  possibleData: Array<T>
  onDataChange: onDataChangeType<T>
  onDataChangeAll: onDataChangeAllType
}

interface Props<T> {
  possibleData: Array<T>
  baseSelectedData: Array<T>
}

export function useSelectedData<T>({
  possibleData,
  baseSelectedData,
}: Props<T>): UseSelectedDataResult<T> {
  const [selectedData, setSelectedData] = useState<Array<T>>(baseSelectedData)

  const onDataChange: onDataChangeType<T> = (elem, value) => {
    const newSelectedData = selectedData.filter((e) => e !== elem)
    if (value) {
      newSelectedData.push(elem)
    }
    setSelectedData(newSelectedData)
  }

  const onDataChangeAll: onDataChangeAllType = (value) => {
    setSelectedData(value ? possibleData : [])
  }

  return {
    possibleData,
    selectedData,
    onDataChange,
    onDataChangeAll,
  }
}
