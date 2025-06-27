// Category 6: prompt(), confirm(), alert()

// Note: These functions are browser-specific and won't work in Node.js environment.
// To run these examples, you'll need to include this code in an HTML file and open it in a browser.

// 1. Use prompt() to take a number from the user and alert if it's positive or negative.
function checkNumberSign() {
    // Prompt user for input
    const userInput = prompt("Please enter a number:");
    
    // Convert input to a number
    const number = parseFloat(userInput);
    
    // Check if the input is a valid number
    if (isNaN(number)) {
        alert("Invalid input! Please enter a valid number.");
    } else {
        // Check if the number is positive, negative, or zero
        if (number > 0) {
            alert(`${number} is positive.`);
        } else if (number < 0) {
            alert(`${number} is negative.`);
        } else {
            alert("The number is zero.");
        }
    }
}

// 2. Ask the user for confirmation before deleting a record using confirm().
function deleteRecord() {
    // Ask for confirmation
    const isConfirmed = confirm("Are you sure you want to delete this record?");
    
    // Check user's response
    if (isConfirmed) {
        alert("Record deleted successfully!");
        // In a real application, you would add code here to actually delete the record
    } else {
        alert("Delete operation cancelled.");
    }
}

// 3. Display a welcome message using alert() based on user name entered in prompt().
function welcomeUser() {
    // Prompt for user's name
    const userName = prompt("Please enter your name:");
    
    // Check if user entered a name
    if (userName === null || userName.trim() === "") {
        alert("Hello, anonymous user!");
    } else {
        alert(`Welcome, ${userName}! We're glad to have you here.`);
    }
}

// 4. Ask user to enter age using prompt() and display eligibility message using alert().
function checkVotingEligibility() {
    // Prompt for user's age
    const userInput = prompt("Please enter your age:");
    
    // Convert input to a number
    const age = parseInt(userInput);
    
    // Check if the input is a valid number
    if (isNaN(age)) {
        alert("Invalid input! Please enter a valid age.");
    } else {
        // Check voting eligibility
        if (age >= 18) {
            alert("You are eligible to vote!");
        } else {
            alert(`Sorry, you are not eligible to vote yet. You need to wait ${18 - age} more year(s).`);
        }
    }
}

// 5. Combine prompt(), confirm() and alert() to create a simple login simulation.
function loginSimulation() {
    // Predefined username and password
    const correctUsername = "user123";
    const correctPassword = "pass456";
    
    // Prompt for username
    const username = prompt("Enter your username:");
    
    // Check if username is entered
    if (username === null || username.trim() === "") {
        alert("Login cancelled.");
        return;
    }
    
    // Prompt for password
    const password = prompt("Enter your password:");
    
    // Check if password is entered
    if (password === null || password.trim() === "") {
        alert("Login cancelled.");
        return;
    }
    
    // Check credentials
    if (username === correctUsername && password === correctPassword) {
        // Successful login
        alert("Login successful! Welcome to the system.");
        
        // Ask if user wants to remember login
        const rememberLogin = confirm("Would you like us to remember your login?");
        
        if (rememberLogin) {
            alert("Your login information will be remembered for next time.");
        } else {
            alert("Your login information will not be saved.");
        }
    } else {
        // Failed login
        alert("Invalid username or password. Please try again.");
    }
}

// Note: To call these functions in a browser environment, you would typically
// attach them to events like button clicks or page load.
// For example:
// document.getElementById("checkNumberBtn").addEventListener("click", checkNumberSign);
// document.getElementById("deleteBtn").addEventListener("click", deleteRecord);
// etc.