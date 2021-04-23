import { Peep } from "./peep"

export class Chitter {
  peeps: Peep[]

  constructor() {
    this.peeps = [ new Peep("OMG we so clever"), new Peep("amazing")]
  }
  getAllPeeps() {
    return this.peeps
  }

  createPeep(body: string) {
    return this.peeps.push(new Peep(body))
  }
}
