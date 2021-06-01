import { ChitterController } from "../../src/controllers/chitter/chitter";
import { expect } from "chai";

describe("ChitterController", () => {
  let chitterController: ChitterController;

  beforeEach(() => {
    chitterController = new ChitterController();
  });

  describe("createPeep", () => {
    it("should add a new peep to the peep array in the chitter model", () => {
      chitterController.createPeep("Test peep");
      expect(chitterController.readPeeps().length).to.equal(1);
    })
  });

  describe("createUser", () => {
    it("should add a new user to the users array in the chitter model", () => {
      chitterController.createUser("username", "email", "password");
      expect(chitterController.readUsers().length).to.equal(1);
    })
  });
});