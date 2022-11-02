//Employee constructor 
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email
    }

    //return the name, id and emil 

    retunName () {
        return this.name
    }

    returnId (){
        return this.id
    }

    returnEmail(){
        return this.email
    }

    //return employee type
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;