import { Peep } from "./peep"

export class Chitter {
  peeps: Peep[]

  constructor() {
    this.peeps = []
  }
  
  getAllPeeps(): Peep[] {
    return this.peeps
  }

  createPeep(body: string): number {
    return this.peeps.push(new Peep(body))
  }
}
