// test/user.test.js
const request = require("supertest");
const app = require("../src/app");

describe("User API", () => {
  it("GET /api/users → returns all users", async () => {
    const res = await request(app).get("/api/users");
    if (res.status !== 200 || !Array.isArray(res.body)) {
      throw new Error("Failed to fetch users");
    }
  });

  it("GET /api/users/1 → returns specific user", async () => {
    const res = await request(app).get("/api/users/1");
    if (res.status !== 200 || res.body.name !== "Rin") {
      throw new Error("Failed to fetch specific user");
    }
  });

  it("GET /api/users/999 → returns 404", async () => {
    const res = await request(app).get("/api/users/999");
    if (res.status !== 404) throw new Error("Should return 404 for not found");
  });
});
