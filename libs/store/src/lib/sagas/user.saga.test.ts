import { testSimpleRequest } from '../tests/test-store-utils'
import { userSlice } from '../reducers/userSlice'
import { getTestUser } from '../tests/test-data'
import { workRequestUserSaga, workUpdateUserSaga } from './user.saga'
import { ResourceService } from '@mono-graph/core'
import { call, put } from '@redux-saga/core/effects'

describe('user.saga', () => {
  it('workRequestUserSaga', async () => {
    const { requestUser, setUser } = userSlice.actions
    const testUser = getTestUser()

    testSimpleRequest(
      testUser,
      requestUser(),
      workRequestUserSaga,
      (requestGenerator: Generator) => {
        expect(requestGenerator.next().value).toEqual(
          call(ResourceService.getUser)
        )
      },
      (responseGenerator: Generator) => {
        expect(responseGenerator.next().value).toEqual(put(setUser(testUser)))
      }
    )
  })

  it('workUpdateUserSaga', () => {
    const { requestUser, updateUser } = userSlice.actions
    const testUser = getTestUser()

    testSimpleRequest(
      testUser,
      updateUser(testUser),
      workUpdateUserSaga,
      (requestGenerator: Generator) => {
        expect(requestGenerator.next().value).toEqual(
          call(ResourceService.updateUser, testUser)
        )
      },
      (responseGenerator: Generator) => {
        expect(responseGenerator.next().value).toEqual(put(requestUser()))
      }
    )
  })
})
