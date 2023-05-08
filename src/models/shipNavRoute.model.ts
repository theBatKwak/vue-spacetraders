import type { ShipNavRouteWaypoint } from './shipNavRouteWaypoint.model'

export interface ShipNavRoute {
  destination: ShipNavRouteWaypoint
  departure: ShipNavRouteWaypoint
  departureTime: number
  arrival: number
}
