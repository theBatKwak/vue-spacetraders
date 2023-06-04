import type { Chart } from './chart.model'
import type { WaypointType } from './enums/waypointType.enum'
import type { Faction } from './faction.model'
import type { WaypointOrbital } from './waypointOrbital.model'
import type { WaypointTrait } from './waypointTrait.model'

export interface Waypoint {
  symbol: string
  type: WaypointType
  systemSymbol: string
  x: number
  y: number
  orbitals: WaypointOrbital[]
  faction: Faction
  traits: WaypointTrait[]
  chart: Chart
}
