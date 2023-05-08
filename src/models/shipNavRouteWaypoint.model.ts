import type { WaypointType } from './enums/waypointType.enum'

export interface ShipNavRouteWaypoint {
  symbol: string
  type: WaypointType
  systemSymbol: string
  x: number
  y: number
}
