import type { ShipNavFlightMode } from './enums/shipNavFlightMode.enum'
import type { ShipNavStatus } from './enums/shipNavStatus.enum'
import type { ShipNavRoute } from './shipNavRoute.model'

export interface ShipNav {
  systemSymbol: string
  waypointSymbol: string
  route: ShipNavRoute
  status: ShipNavStatus
  flightMode: ShipNavFlightMode
}
