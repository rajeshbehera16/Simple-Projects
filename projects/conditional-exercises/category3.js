// Category 3: Comparison Operators (==, ===)

// 1. Write a program that compares two values using == and === and explains the result.
function compareOperators(value1, value2) {
    console.log(`Comparing ${value1} (${typeof value1}) and ${value2} (${typeof value2}):`);
    
    // Using ==
    if (value1 == value2) {
        console.log(`Using == : Equal. The values are considered equal after type conversion.`);
    } else {
        console.log(`Using == : Not equal. The values are different even after type conversion.`);
    }
    
    // Using ===
    if (value1 === value2) {
        console.log(`Using === : Strictly equal. Both value and type are the same.`);
    } else {
        console.log(`Using === : Not strictly equal. Either the value or the type (or both) are different.`);
    }
    
    console.log(""); // Add a blank line for readability
}

// Example usage:
console.log("Exercise 1: Compare values using == and ===");
compareOperators(5, 5);
compareOperators(5, "5");
compareOperators(0, false);
compareOperators(1, true);
compareOperators("hello", "hello");
console.log("\n");

// 2. Check if the string '5' and the number 5 are equal using both operators.
function compareStringAndNumber() {
    const stringValue = '5';
    const numberValue = 5;
    
    console.log(`Comparing string '5' and number 5:`);
    
    // Using ==
    if (stringValue == numberValue) {
        console.log(`Using == : '5' == 5 is TRUE. The string '5' is converted to a number before comparison.`);
    } else {
        console.log(`Using == : '5' == 5 is FALSE.`);
    }
    
    // Using ===
    if (stringValue === numberValue) {
        console.log(`Using === : '5' === 5 is TRUE.`);
    } else {
        console.log(`Using === : '5' === 5 is FALSE. The types are different (string vs number).`);
    }
}

// Example usage:
console.log("Exercise 2: Compare string '5' and number 5");
compareStringAndNumber();
console.log("\n");

// 3. Create a login check where the username is checked using === for exact match.
function checkLogin(enteredUsername, enteredPassword) {
    const correctUsername = "user123";
    const correctPassword = "pass456";
    
    console.log(`Login attempt - Username: ${enteredUsername}, Password: ${enteredPassword}`);
    
    if (enteredUsername === correctUsername) {
        console.log("Username is correct!");
        
        if (enteredPassword === correctPassword) {
            console.log("Password is correct!");
            console.log("Login successful!");
        } else {
            console.log("Password is incorrect!");
            console.log("Login failed!");
        }
    } else {
        console.log("Username is incorrect!");
        console.log("Login failed!");
    }
}

// Example usage:
console.log("Exercise 3: Login check with strict equality");
checkLogin("user123", "pass456");
checkLogin("User123", "pass456");
checkLogin("user123", "wrongpass");