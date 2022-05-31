"use strict";
let x = 12;
// to create the tsconfig.json we use tsc --init
// use tsc --watch to make changes automatique 
// basic types
let nbr = 11;
let nom = "walid";
let bool = true;
let y = true; // it can be anything 
// arrays and tuples 
// arrays 
let nbrs = [1, 2, 3, 4, 5];
let anys = [1, 'test', true]; // array of any   
// tuple
let tpl = [1, "walid", true];
// tuple array 
let employees;
employees = [
    [1, "person1"],
    [2, "gri3a"]
];
// unions and enums 
// unions 
let z = 1; // it can be a string or a number 
// enums 
var animals;
(function (animals) {
    animals["lion"] = "lion";
    animals["tiger"] = "tiger";
    animals["leopard"] = "leopard";
})(animals || (animals = {}));
var animalsV2;
(function (animalsV2) {
    animalsV2[animalsV2["lion"] = 0] = "lion";
    animalsV2[animalsV2["tiger"] = 1] = "tiger";
    animalsV2[animalsV2["leopard"] = 2] = "leopard";
})(animalsV2 || (animalsV2 = {}));
console.log(animals.leopard);
console.log(animalsV2.leopard); // use node index 
const employe1 = {
    id: 1,
    name: "walid",
};
// type assertion 
let sId = 1;
let studentId = sId;
let studentIdV2 = sId;
// functions 
function sum(x, y) {
    return x + y;
}
let user = {
    id: 2,
    name: "bomoh"
};
let sumV2 = (x, y) => x + y;
class Student {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    // methods 
    register() {
        return `${this.name} is registered`;
    }
}
let student1 = new Student(1, "walid");
console.log(student1.register());
// inheritance 
class GiStudent extends Student {
    constructor(id, name, programmingLanguage) {
        super(id, name);
        this.programmingLanguage = programmingLanguage;
    }
}
const giStudent1 = new GiStudent(3, "bora", "python");
console.log(giStudent1.register());
// generics 
function getArray(arr) {
    return new Array().concat(arr);
}
let nbrArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["a", "b", "c"]);
nbrArray.push(1);
