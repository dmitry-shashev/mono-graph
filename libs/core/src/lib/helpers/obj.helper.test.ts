import { ObjHelper } from './obj.helper'

describe('obj.helper', () => {
  it('cloneDeep', async () => {
    const getData = (): unknown => ({
      name: 'Tester',
      age: 89,
      meta: {
        color: 'green',
        weight: 140,
      },
    })
    const data = getData()

    expect(ObjHelper.cloneDeep(data)).toEqual(getData())
    expect(data).toEqual(getData())
  })
})
