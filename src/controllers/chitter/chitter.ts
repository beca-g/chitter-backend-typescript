import { Chitter } from "../../models/chitter"
import { Peep } from "../../models/peep"

const chitter = new Chitter();

export class ChitterController  {
  read(): Peep[] {
    return chitter.getAllPeeps();
  }
}