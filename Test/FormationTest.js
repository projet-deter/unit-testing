const Formation = require ('../Models/Formation')


let formation = new Formation({
    name : "john",
    categories : "Math",
    places : 133,
  })

  test('Test validité formation true', () => { expect(formation.testIsValid().is_valid).toBe(true); });



