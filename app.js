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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Piriya',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favoriteActiveities;
favoriteActiveities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR because map not for string
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
