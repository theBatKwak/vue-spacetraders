import { defineStore } from 'pinia'

export interface AuthState {
  agentToken: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    agentToken: null
  }),
  getters: {
    isLoggedIn: (state) => !!state.agentToken
  }
})
