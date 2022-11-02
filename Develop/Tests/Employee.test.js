//import employee constructor

const Employee = require("../assets/Lib/Employee");

//create an employee object 

describe("Employee", () => {
it("It should be an object", () => {
    const employee = new Employee()
    expect(typeof (employee)).toBe("object")

})
});