import { NOT_ALLOWED_SYMBOLS_MESSAGE } from './form-error-messages'

export function notAllowedSymbolsValidator(value: string): string | true {
  if (/[,=´`'#&%§"!°_:;\\+?.*^$(){}|[\]/]+/.test(value)) {
    return NOT_ALLOWED_SYMBOLS_MESSAGE
  }
  return true
}
