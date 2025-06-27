// Category 4: Logical Operators (&&, ||, !)

// 1. Write a program that checks if a person can drive (age >= 18 AND has license).
function checkDrivingEligibility(age, hasLicense) {
    console.log(`Person's age: ${age}, Has license: ${hasLicense}`);
    
    if (age >= 18 && hasLicense) {
        console.log("This person can legally drive.");
    } else if (age >= 18 && !hasLicense) {
        console.log("This person is old enough but needs a license to drive.");
    } else {
        console.log("This person is too young to drive.");
    }
}

// Example usage:
console.log("Exercise 1: Check if a person can drive");
checkDrivingEligibility(20, true);
checkDrivingEligibility(20, false);
checkDrivingEligibility(16, false);
console.log("\n");

// 2. Check if a number is divisible by 2 OR 3.
function checkDivisibility(number) {
    console.log(`Checking if ${number} is divisible by 2 OR 3:`);
    
    if (number % 2 === 0 || number % 3 === 0) {
        console.log(`${number} is divisible by 2 or 3 (or both).`);
        
        // Additional information
        if (number % 2 === 0 && number % 3 === 0) {
            console.log(`${number} is divisible by both 2 and 3.`);
        } else if (number % 2 === 0) {
            console.log(`${number} is divisible by 2.`);
        } else {
            console.log(`${number} is divisible by 3.`);
        }
    } else {
        console.log(`${number} is not divisible by either 2 or 3.`);
    }
}

// Example usage:
console.log("Exercise 2: Check if a number is divisible by 2 OR 3");
checkDivisibility(6);
checkDivisibility(4);
checkDivisibility(9);
checkDivisibility(7);
console.log("\n");

// 3. Use the NOT ! operator to toggle a boolean value and display the result.
function toggleBoolean(value) {
    console.log(`Original value: ${value} (${typeof value})`);
    
    const toggled = !value;
    console.log(`After toggling with ! operator: ${toggled} (${typeof toggled})`);
    
    // Toggle back to original
    const toggledAgain = !toggled;
    console.log(`After toggling again: ${toggledAgain} (${typeof toggledAgain})`);
}

// Example usage:
console.log("Exercise 3: Toggle boolean values with the NOT operator");
toggleBoolean(true);
toggleBoolean(false);
console.log("\n");

// 4. Create a script that checks if a user is eligible for a discount (either a student OR senior citizen).
function checkDiscountEligibility(age, isStudent) {
    console.log(`Customer age: ${age}, Student status: ${isStudent ? 'Is a student' : 'Not a student'}`);
    
    const isSenior = age >= 65;
    
    if (isStudent || isSenior) {
        console.log("Congratulations! You are eligible for a discount.");
        
        if (isStudent && isSenior) {
            console.log("You qualify for both student and senior citizen discounts!");
            console.log("We'll apply the better discount rate for you.");
        } else if (isStudent) {
            console.log("Student discount will be applied.");
        } else {
            console.log("Senior citizen discount will be applied.");
        }
    } else {
        console.log("Sorry, you are not eligible for a discount.");
        console.log("Discounts are available for students and seniors (age 65+).");
    }
}

// Example usage:
console.log("Exercise 4: Check discount eligibility");
checkDiscountEligibility(20, true);   // Young student
checkDiscountEligibility(70, false);  // Senior, not a student
checkDiscountEligibility(70, true);   // Senior who is also a student
checkDiscountEligibility(30, false);  // Neither student nor senior