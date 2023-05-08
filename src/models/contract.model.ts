import type { ContractTerms } from './contractTerms.model'

export interface Contract {
  id: string
  factionSymbol: string
  type: 'PROCUREMENT' | 'TRANSPORT' | 'SHUTTLE'
  terms: ContractTerms
  accepted: boolean
  fullfilled: boolean
  expiration: string
}
