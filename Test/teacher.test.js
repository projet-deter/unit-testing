const Teacher = require("../Models/Teacher");

/* Teacher */
let teacher = new Teacher({
  firstname: "Marge",
  lastname: "Nani",
  categories: "MATHS"
});

test("Test validité teacher true", () => {
  expect(teacher.testIsValid()).toBe(true);
});

test("Test validité teacher false car prénom vide", () => {
  teacher.firstname = "";
  expect(teacher.testIsValid()).toBe(false);
  teacher.firstname = "john";
});

test("Test validité teacher false car nom vide", () => {
  teacher.lastname = "";
  expect(teacher.testIsValid()).toBe(false);
  teacher.lastname = "smith";
});

test("Test validité teacher false car pas de prénom", () => {
  teacher.firstname = null;
  expect(teacher.testIsValid()).toBe(false);
  teacher.firstname = "john";
});

test("Test validité teacher false car pas de nom", () => {
  teacher.lastname = null;
  expect(teacher.testIsValid()).toBe(false);
  teacher.lastname = "smith";
});

test("Test validité teacher false car catégories vide", () => {
  teacher.categories = "";
  expect(teacher.testIsValid()).toBe(false);
  teacher.categories = "PHP";
});

test("Test validité teacher false car pas de catégories", () => {
  teacher.categories = null;
  expect(teacher.testIsValid()).toBe(false);
  teacher.categories = "PHP";
});
