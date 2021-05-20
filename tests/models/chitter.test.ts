import { Chitter } from "../../src/models/chitter"
import { expect } from "chai"

describe("Chitter", () => {
  let chitter: Chitter;

  beforeEach(() => {
    chitter = new Chitter();
  })

  describe("getAllPeeps", () => {
    it("should show all peeps", () => {
      chitter.createPeep("Peep");
      chitter.createPeep("Peeper");
      expect(chitter.getAllPeeps().length).to.equal(2);
    })
  })

  describe("createPeep", () => {
    it("should create a new peep", () => {
      chitter.createPeep("Hi Hi");
      expect(chitter.getAllPeeps()[0].body).to.equal("Hi Hi");
    })
  })

  describe("createUser", () => {
    it("should create a user", () => {
      chitter.createUser("beca", "hello@beca.com", "password123");
      expect(chitter.users.length).to.equal(1); 
    })
  })
})