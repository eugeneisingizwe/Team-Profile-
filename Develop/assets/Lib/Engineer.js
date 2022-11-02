//engineer contructor
const Employee = require("./Employee");


class Engineer extends Employee{
    constructor (name, id, email, github){
        
        //call the contructor for employee
        super(name, id, email);

        this.github = github;

    }
        //retun github from the input
        retunGitHub(){
            return this.github;
            
        }

        getRole() {
            return "Engineer";
        }
    }


module.exports = Engineer;