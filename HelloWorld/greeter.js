var Student = /** @class */ (function () {
    function Student(firstName, middelInitial, lastName) {
        this.firstName = firstName;
        this.middelInitial = middelInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middelInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user = { firstName: 'Guillermo', lastName: 'Anta' };
var user = new Student('Guillermo', 'A.', 'Anta');
document.body.textContent = greeter(user);
