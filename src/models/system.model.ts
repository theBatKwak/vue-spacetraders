import type { SystemType } from './enums/systemType.enum'
import type { Faction } from './faction.model'
import type { SystemWaypoint } from './systemWaypoint.model'

export interface System {
  symbol: string
  sectorSymbol: string
  type: SystemType
  x: number
  y: number
  waypoints: SystemWaypoint[]
  factions: Faction[]
}
