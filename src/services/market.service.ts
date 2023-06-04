import type { Market } from '@/models/market.model'
import { useAuthStore } from '@/stores/auth.store'
import axios from 'axios'

export class MarketService {
  public static async getMarket(systemSymbol: string, waypointSymbol: string) {
    const authStore = useAuthStore()
    if (!authStore.agentToken) {
      throw new Error('Agent should be logged in')
    }
    const { data }: { data: { data: Market } } = await axios.get(
      `https://api.spacetraders.io/v2/systems/${systemSymbol}/waypoints/${waypointSymbol}/market`,
      {
        headers: { Authorization: `Bearer ${authStore.agentToken}` }
      }
    )
    return data.data
  }
}
