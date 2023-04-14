// This is a comment in Javascript

// Variables in JSON, let and const

// const is a constant, meaning the data type doesn't change
const myName = 'Esen'
const myMiddleName = 'Omurlu'
const myLastName ='Urer'

// Template literal / Template Srting
const myFullName = `${myName} ${myMiddleName} ${myLastName}`
console.log(myFullName)

// let allows you to set values that can be changed 
let myAge = 24

// Reassigns the value
myAge = myAge + 1
console.log(myAge)

//This is and incrementation
myAge++
console.log(myAge)

// Data Types
const myString = "I'm a string" // String of text
const myNumber = 24 // An Integer (Whole Number)
const myFloatNumber = 24.24 // A decimal number
const myBoolean = true // True or False

const myArrayOfColors = ['Red', 'Green', 'Blue']
console.log(myArrayOfColors[2]) //Square brackets for selection. Picks a specific item from the array, starting from 0. So 2 = 3rd item in array

constMyPlayerObject = {
    name: 'Esen',
    hearts: 3,
    inventory: ['sword', 'shield', 'coins'],
    isAlive: true,
}

const propIWant ='inventory'
console.log(constMyPlayerObject[propIWant]) 