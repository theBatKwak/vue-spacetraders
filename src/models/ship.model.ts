import type { ShipCargo } from './shipCargo.model'
import type { ShipCrew } from './shipCrew.model'
import type { ShipEngine } from './shipEngine.model'
import type { ShipFrame } from './shipFrame.model'
import type { ShipFuel } from './shipFuel.model'
import type { ShipModule } from './shipModule.model'
import type { ShipMount } from './shipMount.model'
import type { ShipNav } from './shipNav.model'
import type { ShipReactor } from './shipReactor.model'
import type { ShipRegistration } from './shipRegistration.model'

export interface Ship {
  symbol: string
  registration: ShipRegistration
  nav: ShipNav
  crew: ShipCrew
  frame: ShipFrame
  reactor: ShipReactor
  engine: ShipEngine
  modules: ShipModule[]
  mounts: ShipMount[]
  cargo: ShipCargo
  fuel: ShipFuel
}
