//Function without parameters
function helloWorld() {
    console.log("Hello World");
}

helloWorld();

//Simple function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("John"));

//Function with default parameters
function greetParam(name = "John") {
    return `Hello, ${name}!`;
}

console.log(greetParam());
console.log(greetParam("John Smith"));