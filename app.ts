/*
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple
} = {
    name: 'Piriya',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};
*/

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'Piriya',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActiveities: string[];
favoriteActiveities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR because map not for string
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}
