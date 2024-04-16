import { Currency, ETHER, Token } from '@b-chunchun/uniswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'BYC'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
