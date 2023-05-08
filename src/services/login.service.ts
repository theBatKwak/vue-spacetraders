import type { Agent } from '@/models/agent.model'
import axios from 'axios'

export class LoginService {
  public static async loginAgent(agentToken: string): Promise<Agent> {
    const { data }: { data: { data: Agent } } = await axios.get(
      'https://api.spacetraders.io/v2/my/agent',
      {
        headers: { Authorization: `Bearer ${agentToken}` }
      }
    )
    return data.data
  }
}
