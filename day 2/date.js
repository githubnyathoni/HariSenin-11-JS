// Datetime
const now = new Date();

// Menggunakan Timestamp
const timestampDate = new Date(1679613517 * 1000)

console.log(timestampDate)

// Menggunakan String
const dateString = new Date('March 20 2021 17:53')

// Dengan specific date
// const specificDate = new Date(year, month, day, hours, minutes, seconds, milliseconds)
const specificDate = new Date()

const year = specificDate.getFullYear()
const month = specificDate.getMonth()
const dayOfMonth = specificDate.getDate()
const day = specificDate.getDay()
const hours = specificDate.getHours()
const minutes = specificDate.getMinutes()
const seconds = specificDate.getSeconds()

console.log(specificDate)
console.log(year, 'year')
console.log(month, 'month')
console.log(dayOfMonth, 'dayOfMonth')
console.log(day, 'day')
console.log(hours, 'hours')
console.log(minutes, 'minutes')
console.log(seconds, 'seconds')

const daysIndo = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"]
const monthsIndo = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

function convertSeconds(seconds) {
	if (seconds < 10) {
		return `0${seconds}`
	} else {
		return seconds
	}
}

console.log("Jum'at, 15 Maret 2019 04:20:05")
console.log(`${daysIndo[day]}, ${dayOfMonth} ${monthsIndo[month]} ${year} ${hours}:${minutes}:${convertSeconds(seconds)}`)

const stringFullDate = '2024-03-24 13:37'

const splitedFullDate = stringFullDate.split(' ')
const splitedDate = splitedFullDate[0].split('-')
console.log(stringFullDate)

console.log(`${splitedDate[2]} ${monthsIndo[Number(splitedDate[1])-1]} ${splitedDate[0]} ${splitedFullDate[1]}`)
console.log(splitedDate[0] + ' ' + splitedDate[1])