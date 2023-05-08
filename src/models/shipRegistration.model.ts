import type { ShipRole } from './enums/shipRole.enum'

export interface ShipRegistration {
  name: string
  factionSymbol: string
  role: ShipRole
}
