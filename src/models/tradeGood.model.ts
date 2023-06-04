import type { TradeSymbol } from './enums/tradeSymbol.enum'

export interface TradeGood {
  symbol: TradeSymbol
  name: string
  description: string
}
