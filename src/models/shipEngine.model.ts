import type { ShipRequirements } from './shipRequirements.model'

export interface ShipEngine {
  symbol: string
  name: string
  description: string
  condition: number
  speed: number
  requirements: ShipRequirements
}
