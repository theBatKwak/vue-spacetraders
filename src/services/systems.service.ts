import type { System } from '@/models/system.model'
import type { SystemWaypoint } from '@/models/systemWaypoint.model'
import axios from 'axios'
import { MapService } from './map.service'

export class SystemsService {
  /**
   * Loads system data from API and adds each system its map tiles
   * @param systemSymbol : System symbol
   * @returns System
   */
  public static async getSystemData(systemSymbol: string): Promise<System> {
    const { data: apiData } = await axios.get(
      'https://api.spacetraders.io/v2/systems/' + systemSymbol
    )
    const calculatedWaypoints = apiData.data.waypoints.map((waypoint: SystemWaypoint) => {
      waypoint.tileIndex = MapService.getTileIndexFromCoordinates(waypoint.x, waypoint.y)
      return waypoint
    })
    apiData.data.waypoints = calculatedWaypoints
    return apiData.data as System
  }
}
