// let date = new Date();
// console.log (date.getMonth())
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);

// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// console.log(months[date.getMonth()])

// let date = new Date(1979, 4+1, 9+1); // установим 9 апр 1979 года
// let day  = date.getDay()+1;
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);

// let date = new Date(2015, 11, 4, 23, 59, 59);
// console.log(date.getTime()); //timestamp at ms;

// let now  = new Date();
// let date = new Date(2015, 11, 4, 23, 59, 59);

// let diff = now.getTime() - date.getTime();
// console.log(diff); // diff time at ms

// let date = new Date(2020, 2, 0);

// if (date.getDate() == 29) {
// 	console.log('високосный');
// } else {
// 	console.log('обычный');
// }
// let year  = 2025;
// let month = 0;
// let day   = 32;

// let date = new Date(year, month, day);

// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	console.log('корректна');
// } else {
// 	console.log('некорректна');
// }