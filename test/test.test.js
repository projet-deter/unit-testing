
const Intern = require ('../Models/Intern')

/* Intern */

let intern = new Intern({
  firstname : "john",
  lastname : "smith",
  age : 33,
})


test('Test validité intern false car age trop petit', () => {
  intern.age = 9
  expect(intern.IsValid()).toBe(false);
});

