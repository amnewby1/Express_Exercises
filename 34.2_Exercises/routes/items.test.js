process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
let items = require("../fakeDb");

let exampleItem = { name: "exampleItem", price: 2.99 };

beforeEach(function () {
  items.push(exampleItem);
});

afterEach(function () {
  //make sure this *mutates*, not redefines, 'items
  items.length = 0;
});

describe("GET /items", () => {
  test("Get all items", async () => {
    const res = await request(app).get("/items");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ items: [exampleItem] });
  });
});

describe("POST /items", () => {
  test("Creating an item", async () => {
    const res = await request(app)
      .post("/items")
      .send({ name: "Olives", price: 3.5 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ added: { name: "Olives", price: 3.5 } });
  });
  test("Responds with 400 if name is missing", async () => {
    const res = await request(app).post("/items").send({});
    expect(res.statusCode).toBe(400);
    debugger;
  });
});

describe("PATCH /items/:name", function () {
  test("Updates a single item", async function () {
    const resp = await request(app).patch(`/items/${exampleItem.name}`).send({
      name: "Troll",
    });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ item: { name: "Troll" } });
  });
  test("Responds with 404 if name invalid", async function () {
    const resp = await request(app).patch(`/items/lemon`);
    expect(resp.statusCode).toBe(404);
  });
});

describe("/DELETE /items/:name", () => {
  test("Deleting a item", async () => {
    const res = await request(app).delete(`/items/${exampleItem.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Deleted" });
  });
  test("Responds with 404 for deleting invalid item", async () => {
    const res = await request(app).delete(`/items/hamface`);
    expect(res.statusCode).toBe(404);
  });
});
