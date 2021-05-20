import { User } from "../../src/models/user"
import { expect } from "chai"

describe("User", () => {
  let user: User;
  let ID: number;

  beforeEach(() => {
    user = new User("Beca", "hello@beca.com", "password123")
    ID = Date.now()
  })

  describe("getUsername", () => {
    it("should return a username", () => {
      expect(user.getUsername()).to.equal("Beca")
    })
  })

  describe("getEmail", () => {
    it("should return a users email address", () => {
      expect(user.getEmail()).to.equal("hello@beca.com")
    })
  })

  describe("getPassword", () => {
    it("should return a users password", () => {
      expect(user.getPassword()).to.equal("password123")
    })
  })

  describe("getId", () => {
    it("should return a users IDs", () => {
      expect(user.getId()).to.equal(ID)
    })
  })
})