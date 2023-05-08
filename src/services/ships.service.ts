import type { Ship } from '@/models/ship.model'
import axios from 'axios'

export class ShipsService {
  public static async getShips(agentToken: string): Promise<Ship[]> {
    const { data } = await axios.get<{ data: Ship[] }>('https://api.spacetraders.io/v2/my/ships', {
      headers: { Authorization: `Bearer ${agentToken}` }
    })
    return data.data
  }
}
