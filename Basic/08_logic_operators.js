//AND &&
let age = 18;
let drivingLicense = true;

if (age >= 18 && drivingLicense) {
    console.log("You are allowed to drive");
} else {
    console.log("You are not allowed to drive");
}

//OR ||
let isWeekend = true;
let isWeekday = false;

if (isWeekend || isWeekday) {
    console.log("Relax Today")
} else {
    console.log("Workday")
}

//Not !
let weekday = true;

if (!weekday) {
    console.log("Workday")
} else {
    console.log("Relax day");
}