//Escaping (\,',",/t,/b,/n,/r,/f)
let data0 = 'John Doe "Lorem Ipsum Dolor"';
console.log(data0);

let data1 = "John Doe 'Lorem Ipsum Dolor'";
console.log(data1);

let data2 = "John Doe \'Lorem Ipsum Dolor Sit Amet\' \"Lorem Ipsum Dolor\"";
console.log(data2);

//Literal
let myName = "John Doe";
let age = 100;
let country = "Indonesian";

let myProfile = myName + ", " + age + " years old, i'm from " + country
console.log(myProfile);

let biodata = `${myName} , ${age} years old, i'm from ${country}`
console.log(biodata);

//Operation
//char at
let stringData = "Lorem Ipsum";
let charData = stringData.charAt(0);
console.log(`Index Character: ${charData}`);
charData = stringData.charAt(1);
console.log(`Index Character: ${charData}`);
charData = stringData.charAt(2);
console.log(`Index Character: ${charData}`);
charData = stringData.charAt(3);
console.log(`Index Character: ${charData}`);
charData = stringData.charAt(4);
console.log(`Index Character: ${charData}`);

//connecting string
let stringData0 = "Dolor Sit Amet"
let conString = stringData.concat(" ",stringData0)
console.log(conString);

//take index
console.log(conString.indexOf('L'));
console.log(conString.indexOf('D'));

//substring
console.log(conString.substring(6,11));

//slice
console.log(conString.slice(11,6));

//replace
console.log(conString.replace('Lorem Ipsum','John Doe'));

//toLower
console.log(conString.toLowerCase());

//toUpper
console.log(conString.toUpperCase());

//extract data number
let stringData1= "10"
let intData = parseInt(stringData1)
console.log(typeof intData);

let stringData2= "10,25"
let floatData = parseFloat(stringData2)
console.log(typeof floatData);