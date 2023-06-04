import { useAuthStore } from '@/stores/auth.store'
import axios from 'axios'

export class DockerService {
  public static async dock(shipSymbol: string): Promise<void> {
    const authStore = useAuthStore()
    if (!authStore.agentToken) {
      throw new Error('Agent should be logged in')
    }
    await axios.post(`https://api.spacetraders.io/v2/my/ships/${shipSymbol}/dock`, {
      headers: { Authorization: `Bearer ${authStore.agentToken}` }
    })
  }
  public static async orbit(shipSymbol: string): Promise<void> {
    const authStore = useAuthStore()
    if (!authStore.agentToken) {
      throw new Error('Agent should be logged in')
    }
    await axios.post(`https://api.spacetraders.io/v2/my/ships/${shipSymbol}/orbit`, {
      headers: { Authorization: `Bearer ${authStore.agentToken}` }
    })
  }
}
