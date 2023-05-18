import type { FactionTrait } from './factionTrait.model'

export interface Faction {
  symbol: string
  name: string
  description: string
  headquarters: string
  traits: FactionTrait[]
}
