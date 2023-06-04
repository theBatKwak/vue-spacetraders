import type { SystemWaypoint } from '@/models/systemWaypoint.model'

export class MapService {
  /**
   * Returns map tile index from x and y coordinates (map is 200 x 200)
   * @param x X coordinate
   * @param y Y coordinate
   * @returns tile index
   */
  public static getTileIndexFromCoordinates(x: number, y: number): number {
    const xIndex = Math.floor(x / 10) + 10
    const yIndex = Math.floor(y / 10) + 10
    return yIndex * 20 + xIndex + 1
  }

  public static getSystemWaypointsForTileIndex(
    index: number,
    waypoints: SystemWaypoint[]
  ): SystemWaypoint[] {
    return waypoints.filter((waypoint: SystemWaypoint) => {
      return waypoint.tileIndex === index
    })
  }
}
