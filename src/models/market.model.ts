import type { MarketTradeGood } from './MarketTradeGood.model'
import type { MarketTransaction } from './marketTransaction.model'
import type { TradeGood } from './tradeGood.model'

export interface Market {
  symbol: string
  exports: TradeGood[]
  imports: TradeGood[]
  exchange: TradeGood[]
  transactions: MarketTransaction[]
  tradeGoods: MarketTradeGood[]
}
