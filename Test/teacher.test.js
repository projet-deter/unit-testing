const Teacher = require("../Models/Teacher");

/* Teacher */
let teacher = new Teacher({
  firstname: "Marge",
  lastname: "Nani",
  categories: "Math"
});

test("Test validité teacher true", () => {
  expect(teacher.testIsValid()).toBe(true);
});

test("Test validité teacher false car prénom vide", () => {
  teacher.firstname = "";
  expect(teacher.testIsValid()).toBe(false);
});

test("Test validité teacher false car nom vide", () => {
  teacher.lastname = "";
  expect(teacher.testIsValid()).toBe(false);
});

test("Test validité teacher false car pas de prénom", () => {
  teacher.firstname = null;
  expect(teacher.testIsValid()).toBe(false);
});

test("Test validité teacher false car pas de nom", () => {
  teacher.lastname = null;
  expect(teacher.testIsValid()).toBe(false);
});

test("Test validité teacher false car catégories vide", () => {
  teacher.categories = "";
  expect(teacher.testIsValid()).toBe(false);
});

test("Test validité teacher false car pas de catégories", () => {
  teacher.categories = null;
  expect(teacher.testIsValid()).toBe(false);
});

test("Test validité teacher true", () => {
  expect(teacher.testIsValid()).toBe(true);
});
