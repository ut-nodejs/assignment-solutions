// listing5.6.test.js

const request = require("supertest");
const app = require("../practice/lesson-5/listing5.6.TODO");

describe("Test the root path", () => {
  test("It should respond to the GET method", () => {
    return request(app).get("/").expect(200);
  });
});
