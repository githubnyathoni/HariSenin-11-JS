// const mobilPandegar = {
// 	merk: 'Fiat',
// 	model: 800,
// 	weight: '850kg',
// 	color: 'white',
// 	start: function() {
// 		console.log('Mobilnya idup')
// 	},
// 	break: function() {
// 		console.log('Mobilnya ngerem')
// 	},
// 	drive: () => {
// 		console.log('Mobilnya jalan')
// 	}
// }

// mobilPandegar.start()
// mobilPandegar.drive()
// mobilPandegar.break()

// const mobilDiki = {
// 	merk: 'Masserati',
// 	model: 1200,
// 	weight: '1000kg',
// 	color: 'blue',
// 	start: function() {
// 		console.log('Mobilnya idup')
// 	},
// 	break: function() {
// 		console.log('Mobilnya ngerem')
// 	},
// 	drive: () => {
// 		console.log('Mobilnya jalan')
// 	}
// }

class Mobil {
	constructor(merk, model, weight, color) {
		this.merk = merk
		this.model = model
		this.weight = weight
		this.color = color
	}

	start() {
		console.log('Mobilnya idup')
	}

	break() {
		console.log('Mobilnya ngerem')
	}

	drive() {
		console.log('Mobilnya jalan')
	}
}

const mobilPandegar = new Mobil('Fiat', 800, '850kg', 'white')
const mobilDiki = new Mobil('Masserati', 1200, '1000kg', 'blue')

console.log(mobilDiki)