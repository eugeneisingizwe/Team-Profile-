//import manager constructor

const Manager = require("../assets/Lib/Manager");

//create an manager object 

describe("manager", () => {
it("It should be an object", () => {
    const manager = new Manager()
    expect(typeof (manager)).toBe("object")

})
});