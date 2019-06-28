const Teacher = require("../Models/Teacher");
const Formation = require('../Models/Formation')
const Intern = require ('../Models/Intern')
const Room = require("../Models/Room");
const Course = require("../Models/Course");

const moment = require('moment')

let room = new Room({
  name: "roomA1",
  places: 20
});

let formation = new Formation({
  name: "formation aux fonctions",
  category: "MATHS",
  places: 133,
})

let teacher = new Teacher({
  firstname: "Marge",
  lastname: "Nani",
  categories: "MATHS"
});

let intern1 = new Intern({
  firstname : "john",
  lastname : "smith",
  age : 18,
})

let intern2 = new Intern({
  firstname : "jack",
  lastname : "moe",
  age : 18,
})

let intern3 = new Intern({
  firstname : "josh",
  lastname : "jith",
  age : 33,
})

let course = new Course({
  room,
  formation,
  teacher,
  interns : [
    intern1,intern2,intern3
  ],
  begin : moment().add(1, 'day'),
  end : moment().add(3, 'day')
})

test("Test validité course", () => {
  expect(course.testIsValid()).toBe(true);
});

test("Test validité course false car date non correcte", () => {
  course.end = moment().subtract(3, 'day')
  expect(course.testIsValid()).toBe(false);
  course.end = moment().add(3, 'day')
});

test("Test validité course false car pas assez de place dans la salle", () => {
  course.room.places = 0
  expect(course.testIsValid()).toBe(false);
  course.room.places = 10
});

test("Test validité course false car pas assez de place dans la formation", () => {
  course.formation.places = 0
  expect(course.testIsValid()).toBe(false);
  course.formation.places = 10
});

test("Test validité course false car pas la bonne catégorie", () => {
  course.formation.category = "PHP"
  expect(course.testIsValid()).toBe(false);
  course.formation.category = "MATHS"
});

test("Test validité course false car un stagiaire est invalide", () => {
  course.interns[0].age = 10
  expect(course.testIsValid()).toBe(false);
  course.interns[0].age = 19
});

test("Test validité course false car il y a trop de stagiaire", () => {
  course.room.places = 2
  expect(course.testIsValid()).toBe(false);
  course.room.places = 10
});


