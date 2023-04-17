// Escaping characters. For when some characters break the code and need to be ignored.
const myString = "Hi, I'm a string"
const myString2 = 'Hi, I\'m a string'
const myString3 = "My friend said \"It is what it is\""
// Backticks ignore all types of quotations marks

// Dot notation
const player = {
    name: "Esen",
    health: 100,
    equipment: ['Sword', 'Shield', 'Helmet', 'Chestplate', 'Platelegs', 'Boots'],
    level: 99,
    xp: 271,
}

console.log(player.name)
console.log(player.health)
console.log(player.equipment)


//Pop Method -- "Pops" out last item in array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
fruits.pop()
console.log(fruits)

// toFixed Method -- Sets the decimal place, for example "toFixed(2)" will display to two decimal places
const pi = 3.14159265
console.log(pi.toFixed(2))

// toString Method -- Convert the data type to string
const value = 27
console.log(value.toString())

// indexOf Method -- Returns the first occurrence of a string in a string
let indexString = "Will the method work as intended?"
let indexString2 = indexString.indexOf("method")
console.log(indexString2)

// Math.floor + Math.ceil -- Rounds floats to the nearest integer 
// (floor = round down) (ceil = round up)
const myFloatNumber = 27.07
console.log(Math.floor(myFloatNumber))
console.log(Math.ceil(myFloatNumber))