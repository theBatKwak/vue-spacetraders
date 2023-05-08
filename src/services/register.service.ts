import type { Agent } from '@/models/agent.model'
import type { Contract } from '@/models/contract.model'
import type { Faction } from '@/models/faction.model'
import type { Ship } from '@/models/ship.model'
import axios from 'axios'

export class RegisterService {
  public static async registerAgent(
    faction: 'COSMIC' | 'VOID' | 'GALACTIC' | 'QUANTUM' | 'DOMINION',
    agentName: string
  ): Promise<{ agent: Agent; contract: Contract; faction: Faction; ship: Ship; token: string }> {
    const {
      data
    }: {
      data: {
        data: { agent: Agent; contract: Contract; faction: Faction; ship: Ship; token: string }
      }
    } = await axios.post('https://api.spacetraders.io/v2/register', {
      faction: faction,
      symbol: agentName
    })
    return data.data
  }
}
