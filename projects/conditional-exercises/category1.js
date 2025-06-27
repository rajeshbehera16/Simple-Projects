// Category 1: if...else Statements

// 1. Write a program that checks whether a number is even or odd.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

// Example usage:
console.log("Exercise 1: Check if a number is even or odd");
checkEvenOrOdd(4);
checkEvenOrOdd(7);
console.log("\n");

// 2. Create a program to check if a user is eligible to vote (age >= 18).
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote!");
    } else {
        console.log("Sorry, you are not eligible to vote yet.");
    }
}

// Example usage:
console.log("Exercise 2: Check voting eligibility");
checkVotingEligibility(20);
checkVotingEligibility(16);
console.log("\n");

// 3. Write a script that checks if a given number is positive, negative, or zero.
function checkNumberSign(number) {
    if (number > 0) {
        console.log(`${number} is positive.`);
    } else if (number < 0) {
        console.log(`${number} is negative.`);
    } else {
        console.log("The number is zero.");
    }
}

// Example usage:
console.log("Exercise 3: Check if a number is positive, negative, or zero");
checkNumberSign(10);
checkNumberSign(-5);
checkNumberSign(0);
console.log("\n");

// 4. Develop a program to check whether a character is a vowel or consonant.
function checkVowelOrConsonant(char) {
    // Convert to lowercase for case-insensitive comparison
    char = char.toLowerCase();
    
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log(`'${char}' is a vowel.`);
    } else if (char >= 'a' && char <= 'z') {
        console.log(`'${char}' is a consonant.`);
    } else {
        console.log(`'${char}' is not a letter.`);
    }
}

// Example usage:
console.log("Exercise 4: Check if a character is a vowel or consonant");
checkVowelOrConsonant('A');
checkVowelOrConsonant('b');
checkVowelOrConsonant('3');
console.log("\n");

// 5. Write a code snippet to compare two numbers and display the greater one.
function findGreaterNumber(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}.`);
    } else if (num2 > num1) {
        console.log(`${num2} is greater than ${num1}.`);
    } else {
        console.log(`${num1} and ${num2} are equal.`);
    }
}

// Example usage:
console.log("Exercise 5: Compare two numbers and find the greater one");
findGreaterNumber(15, 10);
findGreaterNumber(8, 20);
findGreaterNumber(5, 5);