//import constructor for manager 

const Employee = require("./Employee");


//extend manager constructor to employee constructor 

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager;