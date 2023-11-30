const request = require("supertest");
const app = require("../server");

describe("GET /users", () => {
  describe("should return all users", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/users");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("should return user with given id", () => {
    test("should respond with a 404 status code for non-existent user", async () => {
      const response = await request(app).get("/users/222");
      expect(response.statusCode).toBe(404);
    });
  });
});
