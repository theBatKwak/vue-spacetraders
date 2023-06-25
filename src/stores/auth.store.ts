import type { Agent } from '@/models/agent.model'
import type { Contract } from '@/models/contract.model'
import type { Faction } from '@/models/faction.model'
import type { Ship } from '@/models/ship.model'
import { RegisterService } from '@/services/register.service'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import router from '@/router'
import { LoginService } from '@/services/login.service'
import { ShipsService } from '@/services/ships.service'
import { LocalDataService } from '@/services/localData.service'

export interface AuthState {
  agentToken: string | null
  agent: Agent | null
  contracts: Contract[] | null
  faction: Faction | null
  ships: Ship[] | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    agentToken: null,
    agent: null,
    contracts: null,
    faction: null,
    ships: null
  }),
  actions: {
    async registerAgent(
      faction: 'COSMIC' | 'VOID' | 'GALACTIC' | 'QUANTUM' | 'DOMINION',
      agentName: string
    ) {
      try {
        const agentData: {
          agent: Agent
          contract: Contract
          faction: Faction
          ship: Ship
          token: string
        } = await RegisterService.registerAgent(faction, agentName)
        console.log(agentData)
        this.agentToken = agentData.token
        LocalDataService.setLocalData(agentData.token)
        this.agent = agentData.agent
        this.contracts = [agentData.contract]
        this.faction = agentData.faction
        this.ships = [agentData.ship]
        router.push('/register-success')
      } catch (error) {
        console.error(error)
        toast.error('Error registering agent.')
      }
    },
    async loginAgent(agentToken: string) {
      try {
        const agentData: Agent = await LoginService.loginAgent(agentToken)
        const agentShips: Ship[] = await ShipsService.getShips(agentToken)
        this.agentToken = agentToken
        LocalDataService.setLocalData(agentToken)
        this.ships = agentShips
        this.agent = agentData
      } catch (error) {
        console.error(error)
        toast.error('Error logging in agent.')
      }
    }
  },
  getters: {
    isLoggedIn: (state): boolean => !!state.agentToken,
    getShipCargo: (state) => (shipSymbol: string) => {
      if (!state.ships) return undefined
      const ship: Ship | undefined = state.ships.find((ship: Ship) => ship.symbol === shipSymbol)
      if (!ship) return undefined
      return ship.cargo
    }
  }
})
