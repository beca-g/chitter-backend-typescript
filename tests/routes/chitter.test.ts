import request from "supertest";
import { expect } from "chai";

import createServer from "../../src/server";
const app = createServer();

describe("Chitter route", () => {
  it("should respond with 200", (done) => {
    request(app).get("/chitter").expect(200, done)
  })
})