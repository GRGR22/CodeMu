//filter возвращает новый массив, в который войдут только те элементы, для которых коллбэк вернет true.

// let arr = [1, 2, 3, 4, 5];

// let result = arr.filter(function(elem) {
// 	return elem % 2 == 0;
// });

// let arr = ['-1', '222222', '33333', '444', '55555555555'];
// console.log( arr.filter(elem => elem.length > 5) );

// let arr = [1, 2, 3, 14, 50];

// console.log( arr.filter(function (el, idx) {
// 	return el*idx > 30
// }));

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// console.log( arr.filter(elem => !Array.isArray(elem)) );

// let arr = [1, 2, 3, 4, 5];
// console.log( arr.filter(elem => elem % 2 == 0).length ); //кол-во четн элем
let arr = [1, -2, -3, -4, 5];
console.log( arr.filter(elem => elem < 0).length );