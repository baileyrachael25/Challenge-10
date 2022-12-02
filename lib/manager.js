//import employee parent class
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email),
        this.officenumber = officeNumber
    };

    getName() {
        return this.name
    };

    getId() {
        return this.id
    };

    getEmail() {
        return this.email
    };

    getRole() {
        return "Manager"
    };

    getOfficeNumber() {
        return this.officeNumber
    };
};

module.exports = Manager;
