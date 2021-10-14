// let arr = ['123', '456', '789'];

// let result = arr.map(function(elem) { // последовательно выведет 1, 2, 3, 4, 5
// 	return elem.split('').reverse().join('');
// });
// console.log(arr, result);

let arr = ['123', '456', '789'];

let result = arr.map(function(elem) { 
	return elem.split('').map(function(str) {
		return +str;
	});
});
console.log(arr, result);