// Category 2: if...else if...else Statements

// 1. Write a program to grade students based on marks:
// A (>=90), B (80-89), C (70-79), D (60-69), F (<60).
function gradeStudent(marks) {
    if (marks >= 90) {
        console.log(`Marks: ${marks}, Grade: A`);
    } else if (marks >= 80) {
        console.log(`Marks: ${marks}, Grade: B`);
    } else if (marks >= 70) {
        console.log(`Marks: ${marks}, Grade: C`);
    } else if (marks >= 60) {
        console.log(`Marks: ${marks}, Grade: D`);
    } else {
        console.log(`Marks: ${marks}, Grade: F`);
    }
}

// Example usage:
console.log("Exercise 1: Grade students based on marks");
gradeStudent(95);
gradeStudent(82);
gradeStudent(75);
gradeStudent(65);
gradeStudent(45);
console.log("\n");

// 2. Write a program to determine the day of the week from a number (1 to 7).
function getDayOfWeek(dayNumber) {
    if (dayNumber === 1) {
        console.log("Day 1 is Monday");
    } else if (dayNumber === 2) {
        console.log("Day 2 is Tuesday");
    } else if (dayNumber === 3) {
        console.log("Day 3 is Wednesday");
    } else if (dayNumber === 4) {
        console.log("Day 4 is Thursday");
    } else if (dayNumber === 5) {
        console.log("Day 5 is Friday");
    } else if (dayNumber === 6) {
        console.log("Day 6 is Saturday");
    } else if (dayNumber === 7) {
        console.log("Day 7 is Sunday");
    } else {
        console.log("Invalid day number. Please enter a number between 1 and 7.");
    }
}

// Example usage:
console.log("Exercise 2: Determine the day of the week");
getDayOfWeek(1);
getDayOfWeek(5);
getDayOfWeek(7);
getDayOfWeek(10);
console.log("\n");

// 3. Check if a year is a leap year or not.
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

// Example usage:
console.log("Exercise 3: Check if a year is a leap year");
checkLeapYear(2020);
checkLeapYear(2021);
checkLeapYear(2000);
checkLeapYear(1900);
console.log("\n");

// 4. Create a weather checking program that gives suggestions (cold, moderate, hot)
// based on temperature input.
function checkWeather(temperature) {
    if (temperature < 10) {
        console.log(`${temperature}°C is cold. Wear warm clothes!`);
    } else if (temperature >= 10 && temperature < 25) {
        console.log(`${temperature}°C is moderate. A light jacket should be fine.`);
    } else {
        console.log(`${temperature}°C is hot. Stay hydrated and wear light clothes!`);
    }
}

// Example usage:
console.log("Exercise 4: Weather suggestions based on temperature");
checkWeather(5);
checkWeather(18);
checkWeather(30);