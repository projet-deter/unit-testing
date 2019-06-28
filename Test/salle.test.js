const Room = require("../Models/Room");

let room = new Room({
  name: "roomA1",
  places: 20
});

test("Test validité user true", () => {
  expect(room.testIsValid()).toBe(true);
});

test("Test validité room false car nom vide", () => {
  room.name = "";
  expect(room.testIsValid()).toBe(false);
});

test("Test validité room false car place inferieur a 0 ", () => {
  room.places = -3;
  expect(room.testIsValid()).toBe(false);
});

test("Test validité room false car nombre de place vide", () => {
  room.places = "";
  expect(room.testIsValid()).toBe(false);
});

test("Test validité room false car nombre de place vide", () => {
  room.places = 0;
  expect(room.testIsValid()).toBe(false);
});
