const Formation = require('../Models/Formation')
const Intern = require ('../Models/Intern')

/* Intern */

let intern = new Intern({
  firstname : "john",
  lastname : "smith",
  age : 33,
})

test('Test de validité du Intern : true', () => {
  expect(intern.IsValid().toBe(true) });

test('Test validité intern false car age trop petit', () => {
  intern.age = 9
  expect(intern.IsValid()).toBe(false);
});

test('Test validité formation true', () => { expect(course.testIsValid()).toBe(true); });
