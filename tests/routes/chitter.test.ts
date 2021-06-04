import request from "supertest";

import createServer from "../../src/server";
const app = createServer();

describe("Chitter routes", () => {
  describe("#/peeps", () => {
    it("should respond with 200", (done) => {
      request(app).get("/chitter/peeps").expect(200, done);
    });

    it("should respond with 200", (done) => {
      request(app).post("/chitter/peeps").expect(200, done);
    });
  });

  describe("#/users", () => {
    it("should respond with 200", (done) => {
      request(app).get("/chitter/users").expect(200, done);
    });

    it("should respond with 200", (done) => {
      request(app).post("/chitter/users").expect(200, done);
    });
  });
});
