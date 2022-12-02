//import libraries and classes
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');

const team = [];

inquirer.prompt([
    {
        message: 'What is the name of the manager for this team?',
        type: 'input',
        name: 'name'
    },
    {
        message: 'What is the manager\'s id number?',
        type: 'input',
        name: 'id'
    },
    {
        message: 'What is the manager\'s email?',
        type: 'input',
        name: 'email'
    },
    {
        message: 'What is the manager\'s office number?',
        type: 'input',
        name: 'officeNumber'
    },
]);