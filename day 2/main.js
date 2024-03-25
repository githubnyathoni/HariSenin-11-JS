// const favoriteFoods = ['Sate', 'Ketoprak', 'Mie', 'Bakso']

// const containerElement = document.getElementById('favorite-foods')
// const ulElement = document.createElement('ul')

// favoriteFoods.forEach((value) => {
// 	const foodElement = document.createElement('li')
// 	foodElement.innerText = value
// 	ulElement.appendChild(foodElement)
// })


// containerElement.appendChild(ulElement)

const containerElement = document.getElementById('favorite-foods')
const ulElement = document.createElement('ul')
containerElement.appendChild(ulElement)

const menus = []
document.getElementById('btn-add-menu').addEventListener('click', function() {
	const newMenu = document.getElementById('new-menu').value

	// Add new menu to array
	menus.push(newMenu)

	// Reset list
	ulElement.innerHTML = ''

	// Create Element List
	menus.forEach((menu) => {
		const foodElement = document.createElement('li')
		foodElement.innerText = menu
		ulElement.appendChild(foodElement)
	})

})

// Delete Element menggunakan DOM
const menu1 = document.getElementById('menu-0')
menu1.remove()
