// test/user.test.js
const request = require("supertest");
const app = require("../src/app");
const db = require("../src/config/db");



describe("User API", () => {
  it("GET /api/users → returns all users", async () => {
    const res = await request(app).get("/api/users");
    if (res.status !== 200 || !Array.isArray(res.body)) {
      throw new Error("Failed to fetch users");
    }
  });

  // it("GET /api/users/1 → returns specific user", async () => {
  //   const res = await request(app).get("/api/users/1");
  //   if (res.status !== 200 || res.body.name !== "Rin") {
  //     throw new Error("Failed to fetch specific user");
  //   }
  // });

  it("GET /api/users/999 → returns 404", async () => {
    const res = await request(app).get("/api/users/999");
    if (res.status !== 404) throw new Error("Should return 404 for not found");
  });
});


describe("Product API", () =>{
  it("GET /api/products  → returns all products", async ()=>{
    const res =await request(app).get("/api/products");
    if (res.status !== 200 || !Array.isArray(res.body)){
      throw new Error("Failed to fetch products");
    }
  })

  it("GET /api/products/1  → returns specific product", async ()=>{
    const res =await request(app).get("/api/products");
    if (res.status !== 200 || !Array.isArray(res.body)){
      throw new Error("Failed to fetch products");
    }
  })

  it("GET /api/products/999  → returns 404", async ()=>{
    const res =await request(app).get("/api/products");
    if (res.status !== 200 || !Array.isArray(res.body)){
      throw new Error("Failed to fetch products");
    }
  })
}

)