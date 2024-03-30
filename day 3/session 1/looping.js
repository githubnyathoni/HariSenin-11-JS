// LOOPING
// 1. FOR
const fruits = ['nanas', 'apel', 'kelengkeng', 'jeruk']

for (let i=0;i<fruits.length;i++) {
	// console.log(fruits[i], i)
}

// 2. FOR IN
const user = {
	name: 'Jehua',
	class: 'JavaScript',
	batch: 12
}

for (let kunci in user) {
	// console.log(kunci, user[kunci])
}

// 3. FOR OF
const users = [
	{
		name: 'Kak Merlin',
		location: 'Bekasi',
		gender: 'Female'
	},
	{
		name: 'Ismail',
		location: 'Bandung',
		gender: 'Male'
	}
]

for (let user of users) {
	// console.log(`${user.name} tinggal di ${user.location} berkelamin ${user.gender}`)
}

// 4. WHILE
let isNotFound = true
const numbers = [7, 5, 8, 10, 2, 13]
let index = 0

while(isNotFound) {
	let value = numbers[index]

	if (value === 2) {
		// console.log('Ketemua nih dua, indexnya ', index)
		isNotFound = false
	}

	index++
}

// FOREACH
const animals = ['domba', 'singa', 'capybara', 'semut']

animals.forEach((value, index) => {
	// console.log(value, index)
})

// MAP
let locations = users.map((item) => item.location)
let pangkatDua = numbers.map((value) => value + 1)
// console.log(locations)

// console.log('original array', numbers)
// console.log('pangkatdua', pangkatDua)

// NESTED LOOP
const duaDimensi = [
	[1, 2, 3, 18 ,5],
	[4, 5, 6],
	[7, 8, 9, 6]
]

for (let i=0;i<duaDimensi.length;i++) {
	// console.log('i', i)
	for (let j=0;j<duaDimensi[i].length;j++) {
		// console.log('j', j)
	}
}

// RECURSIVE
function fibonacci(n) {
	if (n <= 1) {
			return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(3))

// fibonacci(3)
// n = 3
// return fibonacci(2) + fibonacci(1)
// 					1 			+			1
// fibonacci(2)
// return fibonacci(1) + fibonacci(0)
// 		1								0
// fibonacci(1)
// return 1

// fibonacci(1)
// return 1