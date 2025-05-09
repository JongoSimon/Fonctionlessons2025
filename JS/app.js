

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

     //! function expression 
     //?const calculateArea = function(length, width) {
       //? return length * width;
    //? }

    //  let area = calculateArea(5.10);
    //  console.log("Area:", area)

    //  //! Arrow function implicent return
    //  const add : (numOne, numTwo) => numOne + numTwo;

    //  let arrowSum : add(2,3);
    //  console.log(arrowSum);

    //  //! Arrow function with a code block
    //  const concat = (wordOne, wordTwo) => {
    //     return wordOne + wordTwo;
    //  }

    //  let solve = concat("Butter", "Ball")
    //  console.log(solve);


    //  let temArrey = [1,2,3,4]



     // Function to calculate average of 5 scores
function calcAverage(score1, score2, score3, score4, score5) {
    return (score1 + score2 + score3 + score4 + score5) / 5;
}

// Function to determine letter grade
function determineGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

// Main program
function testGrader() {
    // Get five test scores from user
    var score1 = parseFloat(prompt("Enter test score 1:"));
    var score2 = parseFloat(prompt("Enter test score 2:"));
    var score3 = parseFloat(prompt("Enter test score 3:"));
    var score4 = parseFloat(prompt("Enter test score 4:"));
    var score5 = parseFloat(prompt("Enter test score 5:"));

    // Display individual grades
    console.log("Score 1 (" + score1 + "): " + determineGrade(score1));
    console.log("Score 2 (" + score2 + "): " + determineGrade(score2));
    console.log("Score 3 (" + score3 + "): " + determineGrade(score3));
    console.log("Score 4 (" + score4 + "): " + determineGrade(score4));
    console.log("Score 5 (" + score5 + "): " + determineGrade(score5));

    // Calculate and display average
    var average = calcAverage(score1, score2, score3, score4, score5);
    console.log("Average score: " + average.toFixed(2));
    console.log("Average grade: " + determineGrade(average));

    // Show results in alert
    var resultMessage = "GRADES:\n" +
        "Score 1 (" + score1 + "): " + determineGrade(score1) + "\n" +
        "Score 2 (" + score2 + "): " + determineGrade(score2) + "\n" +
        "Score 3 (" + score3 + "): " + determineGrade(score3) + "\n" +
        "Score 4 (" + score4 + "): " + determineGrade(score4) + "\n" +
        "Score 5 (" + score5 + "): " + determineGrade(score5) + "\n\n" +
        "Average: " + average.toFixed(2) + " (" + determineGrade(average) + ")";
    
    alert(resultMessage);
}

// Run the program
testGrader();