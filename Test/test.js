const Intern = require ('../Models/Intern')
const Formation = require('../Models/Formation')
const Room = require ('../Models/Room')

/* Intern */

let intern = new Intern({
  firstname : "john",
  lastname : "smith",
  age : 33,
  })

  test('Test de validité du Intern : true', () => { expect(intern.IsValid().toBe(true); });

  test('Test validité intern false car age trop petit', () => {
  intern.setAge(9)
  expect(intern.IsValid().is_valid).toBe(false);
  });


/* Formation */

let formation = new Formation({
  name: "john",
  category: "Math",
  places: 133,
})


test('Test validité formation true', () => {
  expect(formation.testIsValid()).toBe(true);
});

formation.places = 0;

test('Test validité formation false car  la place est égale à 0', () => {
  formation.places = 12

  expect(formation.testIsValid()).toBe(false);
});


test('Test validité formation true', () => {
  expect(formation.testIsValid()).toBe(true);
});