//import intern constructor

const Intern = require("../assets/Lib/Intern");

//create an employee object 

describe("Intern", () => {
it("It should be an object", () => {
    const intern = new Intern()
    expect(typeof (intern)).toBe("object")

})
});