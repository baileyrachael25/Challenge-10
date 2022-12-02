//employee test

const Employee = require('../lib/employee');

//run a test for each class parameter
test('constructor values for Employee', () => {
    const employee = new Employee('Rachael', '1', 'rachael1@email.com');
    expect(employee.name).toBe('Rachael');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('rachael1@email.com');
});

test('returnName method works?', () => {
    const employee = new Employee('Rachael', '1', 'Rachael1@gmail.com');
    expect(employee.getName()).toBe('Rachael');
});

test('returnID method works?', () => {
    const employee = new Employee('Rachael', '1', 'Rachael1@gmail.com');
    expect(employee.getId()).toBe('1');
});

test('returnEmail method works?', () => {
    const employee = new Employee('Rachael', '1', 'Rachael1@gmail.com');
    expect(employee.getEmail()).toBe('Rachael1@gmail.com');
});

test('returnRole method works?', () => {
    const employee = new Employee('Rachael', '1', 'Rachael1@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});