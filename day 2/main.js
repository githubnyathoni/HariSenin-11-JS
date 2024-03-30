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

	render()


})

function render() {
	// Reset list
	ulElement.innerHTML = ''

	// Create Element List
	menus.forEach((menu, index) => {
		const foodElement = document.createElement('li')
		foodElement.innerText = menu
		foodElement.id = index

		const btnDelete = document.createElement('button')
		btnDelete.innerText = 'X'

		btnDelete.addEventListener('click', () => {
			foodElement.remove()
			menus.splice(foodElement.id, 1)
			render()
		})

		foodElement.appendChild(btnDelete)
		ulElement.appendChild(foodElement)
	})
}