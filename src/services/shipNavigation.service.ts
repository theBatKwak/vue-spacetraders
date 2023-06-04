import { useAuthStore } from '@/stores/auth.store'
import axios from 'axios'

export class ShipNavigationService {
  public static async navigate(shipSymbol: string, waypointSymbol: string) {
    const authStore = useAuthStore()
    if (!authStore.agentToken) {
      throw new Error('Agent should be logged in')
    }
    await axios.post(
      `https://api.spacetraders.io/v2/my/ships/${shipSymbol}/navigate`,
      {
        waypointSymbol: waypointSymbol
      },
      {
        headers: { Authorization: `Bearer ${authStore.agentToken}` }
      }
    )
  }
}
