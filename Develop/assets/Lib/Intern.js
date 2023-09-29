//imoport contructor for Employee

const Employee = require("./Employee");

//extend intern constructor to employee constructor 

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);

        this.school = school;
    }

    returnSchool(){
        return this.school;
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern;