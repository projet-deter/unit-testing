const Formation = require('../Models/Formation')

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

