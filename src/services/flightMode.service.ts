import type { ShipNavFlightMode } from '@/models/enums/shipNavFlightMode.enum'
import { useAuthStore } from '@/stores/auth.store'
import axios from 'axios'

export class FlightModeService {
  public static async setFlightMode(shipSymbol: string, flightmode: ShipNavFlightMode) {
    const authStore = useAuthStore()
    if (!authStore.agentToken) {
      throw new Error('Agent should be logged in')
    }
    await axios.patch(
      `https://api.spacetraders.io/v2/my/ships/${shipSymbol}/nav`,
      {
        flightMode: flightmode
      },
      {
        headers: { Authorization: `Bearer ${authStore.agentToken}` }
      }
    )
  }
}
