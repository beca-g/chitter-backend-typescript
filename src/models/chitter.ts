import { Peep } from "./peep"

export class Chitter {
  peeps: Peep[]

  constructor() {
    this.peeps = []
  }
  getAllPeeps() {
    return this.peeps
  }

  createPeep(body: string) {
    return this.peeps.push(new Peep(body))
  }
}
