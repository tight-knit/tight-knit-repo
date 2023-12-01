const request = require("supertest");
const app = require("../server");

const testGetRequest = (route, expectedStatusCode) => {
  test(`GET ${route} should respond with a ${expectedStatusCode} status code`, async () => {
    const response = await request(app).get(route);
    expect(response.statusCode).toBe(expectedStatusCode);
  });
};
// GET requests
describe("GET Requests", () => {
  testGetRequest("/users", 200);
  testGetRequest("/users/1", 200);
  testGetRequest("/users/222", 404);
  testGetRequest("/location", 200);
});
