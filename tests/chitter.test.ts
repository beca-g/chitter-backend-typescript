import { Chitter } from "../src/chitter"
import { Peep } from '../src/peep'
import { expect } from "chai"

describe("Chitter", () => {
  let chitter: Chitter;

  beforeEach(() => {
    chitter = new Chitter();
  })

  describe("getAllPeeps", () => {
    it("should show all peeps", () => {
      chitter.createPeep("Peep")
      chitter.createPeep("Peeper")
      expect(chitter.getAllPeeps()[1].body).to.equal("Peeper")
    })
  })

  describe("createPeep", () => {
    it("should create a new peep", () => {
      chitter.createPeep("Hi Hi")
      expect(chitter.getAllPeeps()[0].body).to.equal("Hi Hi")
    })
  })
})