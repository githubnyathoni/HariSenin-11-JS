async function getAlumnus() {
	const response = await fetch('https://api.harisenin.com/v2/alumnus?limit=100')

	const result = await response.json()

	return result
}

function renderAlumnus(alumnus) {
	const containerElement = document.getElementById('alumnus')

	const ulElement = document.createElement('ol')
	containerElement.appendChild(ulElement)

	const dataAlumnus = alumnus.result.data
	
	dataAlumnus.forEach(element => {
		console.log(element)
		const liElement = document.createElement('li')

		liElement.innerText = `${element.alumni_username} bekerja sebagai ${element.alumni_user_as} di ${element.alumni_company_name}`

		ulElement.appendChild(liElement)
	});
}

getAlumnus()
	.then((alumnus) => renderAlumnus(alumnus))
