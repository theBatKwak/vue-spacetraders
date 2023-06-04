import type { TradeSymbol } from './enums/tradeSymbol.enum'

export interface MarketTransaction {
  waypointSymbol: string
  shipSymbol: string
  tradeSymbol: TradeSymbol
  type: 'PURCHASE' | 'SELL'
  units: number
  pricePerUnit: number
  totalPrice: number
  timestamp: string
}
