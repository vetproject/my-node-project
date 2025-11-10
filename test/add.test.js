// test/app.test.js
const request = require("supertest");
const app = require("../index");

describe("API Tests", () => {
  it("should return hello message", async () => {
    const res = await request(app).get("/");
    if (res.status !== 200 || !res.text.includes("Hello")) {
      throw new Error("Root route failed");
    }
  });

  it("should correctly add two numbers", async () => {
    const res = await request(app).get("/add/5/7");
    if (res.body.result !== 12) {
      throw new Error("Addition route failed");
    }
  });
});
