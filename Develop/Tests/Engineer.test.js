//import engineer constructor

const Engineer = require("../assets/Lib/Engineer");

//create an engineer object 

describe("Engineer", () => {
it("It should be an object", () => {
    const engineer = new Engineer()
    expect(typeof (engineer)).toBe("object")

})
});