import request from "supertest";

import createServer from "../../src/server";
const app = createServer();

describe("Chitter route", () => {
  it("should respond with 200", (done) => {
    request(app).get("/chitter").expect(200, done)
  })

  it("should respond with 200", (done) => {
    request(app).post("/chitter").expect(200, done)
  })
})