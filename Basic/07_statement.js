//If Statement
let age = 20;

if (age <= 50) {
    console.log("Qualify");
}

//If Else Statement
if (age >= 25) {
    console.log("Not Qualified")
} else {
    console.log("Qualify")
}

//Else If Statement
let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

//Switch Statement
let a = 4;

switch (a) {
    case 2:
        console.log("Small");
        break;
    case 4:
        console.log("Medium");
        break;
    case 6:
        console.log("Large");
        break;
    default:
        console.log("No Size");
}
