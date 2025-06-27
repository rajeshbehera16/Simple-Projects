// Category 5: Ternary Operator

// 1. Use a ternary operator to check if a number is even or odd.
function checkEvenOddTernary(number) {
    // Using ternary operator to check if number is even or odd
    const result = number % 2 === 0 ? "even" : "odd";
    console.log(`${number} is ${result}.`);
    
    // For comparison, here's how it would look with if-else:
    // if (number % 2 === 0) {
    //     console.log(`${number} is even.`);
    // } else {
    //     console.log(`${number} is odd.`);
    // }
}

// Example usage:
console.log("Exercise 1: Check if a number is even or odd using ternary operator");
checkEvenOddTernary(4);
checkEvenOddTernary(7);
console.log("\n");

// 2. Create a one-liner using ternary to return 'Pass' or 'Fail' based on marks.
function checkPassOrFail(marks) {
    const passingMark = 50;
    
    // Using ternary operator to determine pass or fail
    const result = marks >= passingMark ? "Pass" : "Fail";
    console.log(`Marks: ${marks}, Result: ${result}`);
    
    // You can also chain ternary operators for more complex conditions
    const grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";
    console.log(`Grade: ${grade}`);
}

// Example usage:
console.log("Exercise 2: Check pass or fail using ternary operator");
checkPassOrFail(75);
checkPassOrFail(45);
checkPassOrFail(95);
console.log("\n");

// 3. Display whether a given year is a leap year or not using a ternary operator.
function checkLeapYearTernary(year) {
    // Using ternary operator to check if it's a leap year
    const isLeapYear = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? true : false;
    
    // Using another ternary to create the output message
    const message = isLeapYear ? `${year} is a leap year.` : `${year} is not a leap year.`;
    console.log(message);
    
    // Note: We could simplify this further by combining the two ternaries:
    // console.log(((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 
    //     `${year} is a leap year.` : `${year} is not a leap year.`);
}

// Example usage:
console.log("Exercise 3: Check leap year using ternary operator");
checkLeapYearTernary(2020);
checkLeapYearTernary(2021);
checkLeapYearTernary(2000);
checkLeapYearTernary(1900);