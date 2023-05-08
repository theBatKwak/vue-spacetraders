import type { ShipCargoItem } from './shipCargoItem.model'

export interface ShipCargo {
  capacity: number
  units: number
  inventory: ShipCargoItem[]
}
