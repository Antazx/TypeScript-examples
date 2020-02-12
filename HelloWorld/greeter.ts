class Student {
    fullName: string;
    constructor(public firstName: string, public middelInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middelInitial} ${lastName}`
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

//let user = { firstName: 'Guillermo', lastName: 'Anta' };
let user = new Student('Guillermo', 'A.', 'Anta');
document.body.textContent = greeter(user);