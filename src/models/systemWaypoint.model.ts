import type { WaypointType } from './enums/waypointType.enum'

export interface SystemWaypoint {
  symbol: string
  type: WaypointType
  x: number
  y: number
}
