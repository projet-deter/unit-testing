const Course = require ('../Models/Course')

let course = new Course({
    room: " ",
    teacher : "Math",
    interns : 133,

  })

  test('Test validité formation true', () => { expect(formation.testIsValid().is_valid).toBe(true); });