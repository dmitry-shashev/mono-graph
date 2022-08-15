import { PayloadAction } from '@reduxjs/toolkit'
import { errorSlice } from '../reducers/errorSlice'
import { requestSlice } from '../reducers/requestSlice'
import { put } from '@redux-saga/core/effects'

export function testSimpleRequest<T>(
  responseData: T,
  action: PayloadAction,
  sagaName: (a: PayloadAction) => Generator,
  checkRequest: (requestGenerator: Generator) => void,
  checkResponse: (responseGenerator: Generator) => void
) {
  const { clearError } = errorSlice.actions
  const { startRequest, stopRequest } = requestSlice.actions
  const g = sagaName(action)

  const simpleGenerator = g.next().value as Generator
  expect(simpleGenerator.next().value).toEqual(put(clearError(action.type)))
  expect(simpleGenerator.next().value).toEqual(put(startRequest(action.type)))

  // request
  const requestGenerator = simpleGenerator.next().value
  checkRequest(requestGenerator)

  // response
  const responseGenerator = simpleGenerator.next(responseData).value
  checkResponse(responseGenerator)

  expect(simpleGenerator.next().value).toEqual(put(stopRequest(action.type)))
}
