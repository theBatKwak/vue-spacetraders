import type { FactionTrait } from './FactionTrait.model'

export interface Faction {
  symbol: string
  name: string
  description: string
  headquarters: string
  traits: FactionTrait[]
}
