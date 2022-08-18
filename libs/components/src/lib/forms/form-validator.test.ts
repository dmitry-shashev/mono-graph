import { notAllowedSymbolsValidator } from './form-validators'
import { NOT_ALLOWED_SYMBOLS_MESSAGE } from './form-error-messages'

describe('form-validator', () => {
  it('notAllowedSymbolsValidator', async () => {
    expect(notAllowedSymbolsValidator('aa$')).toBe(NOT_ALLOWED_SYMBOLS_MESSAGE)
    expect(notAllowedSymbolsValidator('aas')).toBe(true)
  })
})
