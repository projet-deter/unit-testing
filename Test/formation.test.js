const Formation = require('../Models/Formation')

/* Formation */

let formation = new Formation({
  name: "john",
  category: "Math",
  places: 133,
})


test('Test validité formation true', () => {
  expect(formation.testIsValid()).toBe(true)
});

test('Test validité formation false car  la place est égale à 0', () => {
  formation.places = 0;
  expect(formation.testIsValid()).toBe(false);
  formation.places = 12;
});

test('Test validité formation false car pas de category', () => {
  formation.category = null;
  expect(formation.testIsValid()).toBe(false);
  formation.category = "MATH";
});

test('Test validité formation true', () => {
  expect(formation.testIsValid()).toBe(true);
});

