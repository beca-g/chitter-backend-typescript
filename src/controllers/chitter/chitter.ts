import { Chitter } from "../../models/chitter"
import { Peep } from "../../models/peep"

const chitter = new Chitter();

export class ChitterController  {

  create(peep: string): number {
    return chitter.createPeep(peep)
  }

  read(): Peep[] {
    return chitter.getAllPeeps();
  }
}