import { Peep } from "../../src/models/peep"
import { expect } from "chai"

describe("Peep", () => {
  let peep: Peep 
  let date: string;
  let id:  number;
  
  beforeEach(() => {
    peep = new Peep("Hello", 1618933497553, 1618933497553)
    date = "20/04/2021, 16:44:57"
    id = 1618933497553
  })

  describe("#getBody", () => {
    it("should have a body of text", () => {
      expect(peep.getBody()).to.equal("Hello")
    })
  })

  describe("#getTimeStamp", () => {
    it("should have a time & date that the peep was posted", () => {
      expect(peep.getTimeStamp()).to.include(date)
    })
  })

  describe("#getId", () => {
    it("should have a ID", () => {
      expect(peep.getId()).to.eq(id)
    })
  })
})
