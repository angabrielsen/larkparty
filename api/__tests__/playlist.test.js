const request = require("supertest");
const app = require("../app");

describe('GET /', () => {
  test("It should return 200", async () => {
    const response = await request(app).get('/playlist');

    expect(response.statusCode).toBe(200);
  });
});
