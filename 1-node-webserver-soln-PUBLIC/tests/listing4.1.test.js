// listing4.1.test.js

const request = require("supertest");
const app = require("../practice/lesson-4/listing4.1.EX");
const httpStatus = require("http-status-codes");

describe("Test the root path", () => {
  test("It should respond to the GET method", () => {
    return request(app).get("/").expect(httpStatus.OK);
  });
});
