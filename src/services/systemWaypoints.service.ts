import { WaypointType } from '@/models/enums/waypointType.enum'
import type { Waypoint } from '@/models/waypoint.model'
import axios from 'axios'

export class SystemWaypointsService {
  public static async getSystemWaypointData(
    systemSymbol: string,
    waypointSymbol: string
  ): Promise<Waypoint> {
    const { data: apiData } = await axios.get(
      `https://api.spacetraders.io/v2/systems/${systemSymbol}/waypoints/${waypointSymbol}`
    )
    return apiData.data
  }

  public static getWaypointBackgroundColor(waypointType: WaypointType): string {
    switch (waypointType) {
      case WaypointType.PLANET:
        return 'bg-lime-600'
      case WaypointType.GAS_GIANT:
        return 'bg-violet-700'
      case WaypointType.MOON:
        return 'bg-slate-500'
      case WaypointType.ORBITAL_STATION:
        return 'bg-cyan-600'
      case WaypointType.JUMP_GATE:
        return 'bg-amber-700'
      case WaypointType.ASTEROID_FIELD:
        return 'bg-amber-900'
      case WaypointType.NEBULA:
        return 'bg-fuchsia-700'
      case WaypointType.DEBRIS_FIELD:
        return 'bg-yellow-500'
      case WaypointType.GRAVITY_WELL:
        return 'bg-rose-700'
      default:
        return 'bg-primary'
    }
  }
}
