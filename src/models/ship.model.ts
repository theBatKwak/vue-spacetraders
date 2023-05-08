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
