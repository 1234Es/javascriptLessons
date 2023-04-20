//                              For Loop
for (let i =5; i >= 0; i--) {
    console.log(i)
}


//                              Using a for loop with an array
const colors = ['red', 'green', 'blue']

for (let x = 0; x < colors.length; x++) {
    console.log(colors[x])
}


//                              While Loop
let y = 1
while (y <= 5) {
    console.log(y)
    y++
}

let text = ''
while (text.length <= 10) {
    console.log(text)
    text += text.length
}


//                              Do.. While Loop 
do {
    console.log('text')
} while (false)


//                              For.. Of Loop
console.log("Before the loop")
for (const color of colors) {
    console.log(color)
}
console.log("After the loop")


//                              For.. In Loop
const book = {
    title : 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    language : 'English',
    genre: ['High Fantasy', 'Adventure']
}

for(const key in book) {
    console.log(`${key.toUpperCase()}: ${book[key]}`)
}


//                              Example of loop with user prompt to check password
// let passAttempt = 0
// let passwordGuessed = false
// const checkPassword = (passwordValue) => {
//     const pass = prompt("What is the password")
//     passAttempt++
    
//     if (pass == passwordValue) {
//         passwordGuessed = true
//     } else {
//         passwordGuessed = false
//     }
//     return pass
// }

// do {
//     const password = checkPassword('password123')
//     console.log(password)
// } while (passAttempt <= 3 && !passwordGuessed)


//                              For Each Loop
const students = [
    {
        name: 'John Smith',
        course: 'Front End Development',
        startDate: "20/04/2023",
    },
    {
        name: 'Jane Smith',
        course: 'Data Science',
        startDate: "20/04/2023",
    },
    {
        name: 'Gary Jones',
        course: 'Full Stack Development',
        startDate: "20/04/2023",
    },
    {
        name: 'Samantha Hughes',
        course: 'Front End Development',
        startDate: "20/04/2023",
    },
    ]

const welcomeStudent = (student, index) => {
    index
    console.log(`Welcome ${student.name}, you are due to start your ${student.course} course on ${student.startDate}`)
}
students.forEach(welcomeStudent)


const studentNames = students.map(({name}) => {
    return name
})
studentNames.forEach((name) => console.log(name))

const nonFrontEnd = students.filter(({course}) => {
    return course !== 'Front End Development'
})
console.log(nonFrontEnd)

