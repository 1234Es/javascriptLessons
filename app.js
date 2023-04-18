// IF ELSE STATEMENTS

const myAge = 18;

if (!(myAge <= 0)) {
  if (myAge >= 18) {
    console.log("you are old enough to vote!");
  } else {
    console.log("you are not old enough to vote!");
  }
} else {
  console.log("Pick a real age!");
}



const myName = "Esenn";

if (myName === "Esen") {
  console.log(`Hello ${myName}`);
} else {
  console.log(`I don't know any "${myName}"`);
}



const user = {
  username: "Esen1234",
  loggedIn: false,
  email: "esenurer@gmail.com",
}

if (user.loggedIn) {
  console.log(`Hello, ${user.username}`);
} else {
  console.log("Please log in");
}



// Check if a number is odd or even
const myNumber = 26 

if (myNumber % 2 == 0) {
    console.log("Your number is even")
} else {
    console.log("Your number is odd")
}


// Functions
function myFirstFunction() {
    return "Hello World!"
}

const secretMessage = myFirstFunction()
console.log(secretMessage)

function multiplier(a, b) {
    return a * b
}
console.log(multiplier(3,3))


function passwordChecker(pass) {
    if (pass.length >= 8) {
        return 'strong password'
    }
    return 'weak password'
}

let myPassword = 'qwerty123'
console.log(passwordChecker(myPassword))

// Shorthand Functions
const multiplierES6 = (a, b) => a* b
console.log(multiplierES6(3,3))

const passwordCheckerES6 = (pass = 'password123') => (pass.length >= 8 ? 'strong password' : 'weak password')

// SCOPE
const globalVar = "This is a global variable"
const scopeDemo = () => {
    let localVar = "This is a local variable"
    return {
        local: localVar,
        global: globalVar,
    }
}

const values = scopeDemo()
// console.log(localVar) --- Throws an error because the variable is within the function, therefore not accessible globally
console.log(values) // Will show both the values