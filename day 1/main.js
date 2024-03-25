// // 1. TIPE DATA
// // STRING
let firstName = 'Izza: \'Apakah kamu puasa?\'';
let lastName = 'Pandegar: "Udah batal'

console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`)

// // Number
let age = 23
let height = 175.8
console.log(typeof age, typeof height)

// // Boolean
let isMarried = false
let isMale = true
// console.log(typeof isMarried, typeof isMale)

// // TIPE DATA NON PRIMITIF
// // ARRAY
const fruits = ["nanas", "bengkoang", "kelengkeng", "kelapa"]

const nilai = [70, 72, 61, 1]

const arr = ["Nanas", 91, true]
// Index 0, 1, 2

// Destructuring Array
const [ firstFruit, secondFruit, thirdFruit ] = fruits
console.log(firstFruit, secondFruit, thirdFruit)

// OBJECT
const user = {
	name: 'Akbar',
	gender: 'Male',
	age: 20,
	favorite_foods: ["nanas", "bengkoang", "kelengkeng", "kelapa"],
	family: {
		father: 'Suep',
		mother: 'Ani'
	}
}

// Destructuring Object
const { name: nama, gender: jenis_kelamin, age: umur } = user

console.log(typeof String(umur), typeof umur)

// OPERATOR
// Operator Aritmatika
//  + - * / % **
let firstNum = 10
let secondNum = 2
console.log(Math.sqrt(9)) // 3


// Assignment Operator
let name = 'Kak Theresia'

// let age = 10
age += 5
age = age + 5
age -= 5
age *= 5
age /= 5
age %= 5

// console.log(age)

// Operator Perbandingan
let izzaScore = 1125
let theresiaScore = 1125

// ===
console.log(izzaScore === theresiaScore)

// Tidak sama dengan
console.log(izzaScore !== theresiaScore)

// Kurang dari
console.log(izzaScore < theresiaScore)

// Kurang dari sama
console.log(izzaScore <= theresiaScore)

// Lebih dari
console.log(izzaScore > theresiaScore)

// lebih dari sama dengan
console.log(izzaScore >= theresiaScore)

// Ternary Operator ? :
console.log(
	izzaScore === theresiaScore
	? 'Nilainya sama gais'
	: 'Beda kali'
)

// Operator logical
// && (AND)
// let isMarried = true
let isSingle = false
console.log(isMarried && isSingle) // false

// || (OR)
console.log(isMarried || isSingle) // true

// ! (Negasi)
console.log(!isSingle) // true

