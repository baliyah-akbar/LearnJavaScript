//Number
let nInt = 123;
let nFloat = 1.23;

console.log("data type number (integer): ", nInt);
console.log("data type number (float): ", nFloat);

//BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log("data type number (bigInt): ", bigInt);

//String
let string = "John Smith";
console.log("data type string: ", string);

//Boolean: TRUE or FALSE
let boolean = true;
let notBoolean = false;
console.log("data type boolean true: ", boolean);
console.log("data type boolean false: ", notBoolean);

let isGreater = 5 < 1;
console.log("This uses data type boolean: ", isGreater);

//Null
let age = null;
console.log("data type null: ", age);

//Undefined
let undefined;
console.log("data type undefined: ", undefined);

//Object
let departmentQA = { //Object
    leadQA: "John", //Property: leadQA with value: John
    seniorQA: "Smith",
    staffQA: "Doe"
}
console.log(departmentQA.staffQA);

//Symbol
const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2); // Value symbol is unique
