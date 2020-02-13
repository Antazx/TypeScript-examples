/* const person: {
    name: string;
    age: number; */
/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Guillermo',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}; */

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin'];

const person = {
    name: 'Guillermo',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: 'ADMIN'
};


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === 'ADMIN') {
    console.log('Is admin');
}