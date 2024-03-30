// Menggunakan keyword function
function createListElement(item) {
	liElement = document.createElement('li')

	liElement.innerText = item

	ulElement.appendChild(liElement)
}

function createMenuList() {
	containerElement = document.getElementById('menus')

	ulElement = document.createElement('ul')
	
	containerElement.appendChild(ulElement)
	
	const menus = ['Sate', 'Bakso', 'Opor Ayam']
	
	menus.forEach((item) => {
		createListElement(item)
	})
	
	const minuman = ['Jus Apel', 'Es Teler']
	
	minuman.forEach((item) => {
		createListElement(item)
	})
}

createMenuList()
// Menggunakan ekspresi
let penjumlahanDuaVariabel = function(num1, num2 = 1) {
	return num1 + num2
}

let hasilPenjumlahan = penjumlahanDuaVariabel(5, 10)
console.log(hasilPenjumlahan)

// Menggunakan tanda panah
let luasPersegiPanjang = (panjang, lebar) => {
	return panjang * lebar
}

// console.log(luasPersegiPanjang(10, 5))

