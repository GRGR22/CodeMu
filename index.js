// function func([name, surname, department, position, salary]) {
// 	console.log(name, surname, department, position, salary)
// }
// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

// function func([name, surname, department, position = 'джуниор']) {
// }
// func( ['Иван', 'Иванов', 'отдел разработки'] );

// function func(department, [name, surname], [year, month, day]) {
// console.log(department, name, surname, year, month, day)
// }
// func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] );

// function func({color, width, height}) {
// 	console.log(color, width, height)//red 400 500
// }
// func( {color: 'red', width: 400, height: 500} );

function func({width, height, color = 'black'}) {
	console.log(color, width, height); //black 400 500 
}
func( {width: 400, height: 500} );