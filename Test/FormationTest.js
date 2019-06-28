const Formation = require ('../Models/Formation')


let formation = new Formation({
    name : "john",
    categories : "Math",
    places : 133,
  })

  test('Test validité formation true', () => { expect(formation.testIsValid().is_valid).toBe(true); });

  formation.places = 0;

  test('Test validité formation false car  la place est égale à 0', () => {
    formation.places = 12  
    
    expect(user.testIsValid().is_valid).toBe(false);
  });
  




