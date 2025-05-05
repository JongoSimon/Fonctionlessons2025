

//? function greetUser() {
 //?   console.log("Hello Jongo!")
//? }

//? Function declaration
function greetUser(name) {
    console.log ("Hi " + name);
}
//? Running a function
greetUser("Jongo");
greetUser("Simon");
greetUser("Brice");
greetUser("Kens");

//? Function with a return statement 
function giveFood(food) {
    let foo = `${food} and ${food}`
    
    return foo


    //! NO CODE UNDER RETURN STATEMENT WILL RUN.
    let bar = 0;    
}

let totalFood = giveFood ("apple");
console.log(totalFood)

let listofNames = ["kens","Brice", "Jongo"];
for(let i = 0; i < listofNames.length; i++) {
    greetUser(listofNames[i]);
}

//! Function Expression
const calculateArea = function(length, width) {
return length * width;
}

let area = calculateArea(5,10);
console.log("Area: ", area)


//! exercise 3 sum of two numbers

const addNumbers = function(num1, num2) {
    return num1 + num2;
}

let sum = addNumbers(6,14);
console.log("Result:", sum)

//! Day 12 exercise 1. Convert Kilometers to miles

function convertKilometersToMiles(kilometers) {
const miles = kilometers * 0.621371; //!1 km = 0.621371
return miles;
}

console.log(convertKilometersToMiles(28));
console.log(convertKilometersToMiles(35));

//! sum numbers in arrays

function sumArray(numbers) {
    let total = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
     return total;
    }

    console.log(sumArray([4, 5, 39, 82,]));

    //! Calculate the area of circle

    function calculateCircleArea(radius) {
        let pi = 3.14;
        let Area = pi * radius * radius;
        return Area;
    }
     console.log(calculateCircleArea("6"));