import { User } from "../../src/models/user"
import { expect } from "chai"

describe("User", () => {
  let user: User;
  
  beforeEach(() => {
    user = new User("Beca", "hello@beca.com", "password123")
  })
  describe("getUsername", () => {
    it("should return a username", () => {
      expect(user.getUsername()).to.equal("Beca")
    })
  })
})