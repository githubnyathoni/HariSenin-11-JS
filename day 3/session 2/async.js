// CALLBACK
// console.log('Mengambil data user...')

// function getUsers(isOffline, callback) {
// 	setTimeout(() => {
// 		const users = ['John', 'Jack', 'Abigail']
		
// 		if (isOffline) {
// 			callback(new Error('cannot retrieve users due offline', null))
// 			return
// 		}

// 		callback(null, users)
// 	}, Math.random() * 3)
// }

// function showUsersCallBack(error, users) {
// 	if (error) {
// 		console.log('process failed', error.message)
// 		return;
// 	}

// 	console.log('process success', users)
// }

// showUsersCallBack(getUsers())
// getUsers(true, showUsersCallBack)
// getUsers(false, showUsersCallBack)

// PROMISE
// function getUsers(isOffline) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const users = ['John', 'Jack', 'Abigail']
			
// 			if (isOffline) {
// 				reject(new Error('cannot retrieve users due offline'))
// 				return
// 			}

// 			resolve(users)
// 		}, 3000)
// 	})
// }

// Nilai Promise
// Pending: Ketika promisenya belum selesai
// Fulfilled: Ketika promisenya selesai dan ditepati
// Rejected: Ketika promisenya dan tidak ditepati
// getUsers(true)
// 	.then(users => console.log(users))
// 	.catch(err => console.log(err.message))
// 	.finally(() => console.log('udah selesai'))

// CHAINING PROMISES
function withdrawMoney(amount) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (amount > 100) {
				reject(new Error('Gak cukup bro saldonya'))
				return
			}

			// console.log(`Keambil ${amount}`)
			resolve(amount)
		}, 2000)
	})
}

function buyTicket(money) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (money < 10) {
				reject(new Error('Gak cukup duitnya buat beli tiket'))
			}

			// console.log('Berhasil beli tiket')
			resolve('TIKET-A1')
		}, 2000)
	})
}

function goInsideCinema(ticket) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {

			if (!ticket) {
				reject(new Error('Gak bisa masuk'))
			}

			resolve('Enjoi movie')
		}, 2000)
	})
}


// function watchMovie() {
// 	withdrawMoney(500)
// 	.then((money) => buyTicket(money))
// 	.then((ticket) => goInsideCinema(ticket))
// 	.then((result) => console.log(result))
// 	.catch(err => console.log(err.message))
// }

// watchMovie()

// Async/Await
// async function watchMovie() {
// 	try {
// 		let money = await withdrawMoney(5)
// 		console.log(money)
// 		let ticket = await buyTicket(money)
// 		console.log(ticket)
// 		let result = await goInsideCinema(ticket)
	
// 		console.log(result)
// 	} catch(err) {
// 		console.log(err.message)
// 	}
// }

// watchMovie()

// CONSUME API
// fetch('https://api.harisenin.com/v2/alumnus?limit=10')
// .then(async (data) => {
// 	let result = await data.json()
// 	console.log(result)
// })

async function getAlumnus() {
	const response = await fetch('https://api.harisenin.com/v2/alumnus?limit=10')

	const result = await response.json()

	return result
}


getAlumnus()