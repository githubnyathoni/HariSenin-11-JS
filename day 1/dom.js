let h1Element = document.getElementById('title')

let menuElement = document.getElementsByClassName('menu')

let liElement = document.getElementsByTagName('li')

let titleElement = document.querySelectorAll('#title')

let menuQueryElement = document.querySelector('.menu')
let menuQueryAllElement = document.querySelectorAll('.menu')
// let liElement = document.querySelector('li')

let containerElement = document.getElementById('container')

// h1Element.style.color = 'blue'
// containerElement.style.backgroundColor = 'red'

// menuQueryAllElement.style.color = 'red'

function hitungLuas() {
	const num1Element = document.getElementById('num1')
	const num2Element = document.getElementById('num2')

	let num1 = num1Element.value
	let num2 = num2Element.value
	
	const result = num1 * num2

	const resultElement = document.getElementById('result')
	resultElement.innerHTML = `<h1>${result}<h1>`
}

