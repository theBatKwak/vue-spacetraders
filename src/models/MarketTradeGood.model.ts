export interface MarketTradeGood {
  symbol: string
  tradeVolume: number
  supply: 'SCARCE' | 'LIMITED' | 'MODERATE' | 'ABUNDANT'
  purchasePrice: number
  sellPrice: number
}
