import type { ContractDeliverGood } from './contractDeliverGood.model'
import type { ContractPayment } from './contractPayment.model'

export interface ContractTerms {
  deadline: string
  payment: ContractPayment
  deliver: ContractDeliverGood[]
}
