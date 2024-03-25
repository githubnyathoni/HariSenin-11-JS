let nilaiFaza = 80
let nilaiPandegar = 80

console.log('Nilai Faza: ', nilaiFaza)
console.log('Nilai Pandegar: ', nilaiPandegar)

// IF ELSE
if (nilaiFaza > nilaiPandegar) {
	console.log('Nilai Faza lebih besar dari Pandegar')
}
else if (nilaiFaza === nilaiPandegar) {
	if (nilaiFaza >= 80) {
		console.log('Nilai B')
	} else if (nilaiFaza >= 70)
	console.log('Nilainya C')
}
else console.log('Nilainya Pandegar lebih besar dari Faza')


// TERNARY OPERATOR
console.log(
	nilaiFaza > nilaiPandegar ?
	'Nilainya faza lebih gede uy' :
	(nilaiFaza === nilaiPandegar ?
		'Nilainya sama bro' : 
		'Nilainya faza gak lebih gede dari Pandegar'
	)
)

const hari = prompt('Masukkan hari')

switch (hari) {
	case 'Senin':
	case 'Selasa':
	case 'Rabu':
	case 'Kamis':
	case 'Jumat':
		console.log('Ini hari kerja')
		break
	case 'Sabtu':
	case 'Minggu':
		console.log('Ini hari libur')
		break
	default:
		console.log('gak ada hari itu')
		break
}