  
const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");

describe("testing Post endpoint", () => {
  beforeEach(async () => {
    await db("tvshows").truncate();
  });

  test("should return 201 on success", () => {
    return request(server)
      .post("/shows")
      .send({ name: "One Punch Man" })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });
  test("should return correct name", () => {
    return request(server)
      .post("/shows")
      .send({ name: "One Punch Man" })
      .then((res) => {
        expect(res.body.name).toBe("One Punch Man");
      });
  });
});

describe("testing delete endpoint", () => {
  test("should return 200 status", () => {
    return request(server)
      .delete("/shows/:id")
      .send({ id: 1 })
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  test("should return the delete message", () => {
    return request(server)
      .delete("/shows/:id")
      .send({ id: 1 })
      .then((res) => {
        expect(res.body.message).toBe("show has been removed");
      });
  });
});