//variable type let
let myName = "John Doe";
console.log(myName);

//variable type var (not recommended)
var city = "Lorem Ipsum";
console.log(city);

//variable type const
const job = "Lorem Ipsum";
console.log(job);

//difference between let, var and const
var firstName = "John Doe";
{
    var firstName = "John Smith";
}
console.log(firstName);

const myJob = "Lorem Ipsum";
{
    const myJob = "Lorem Ipsum Dolor";
}
console.log(myJob);

let country = "Indonesian";
{
    let country = "Singapore";
}
console.log(country);