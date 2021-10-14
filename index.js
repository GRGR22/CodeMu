// let arr = ['123', '456', '789'];

// let result = arr.map(function(elem) { // последовательно выведет 1, 2, 3, 4, 5
// 	return elem.split('').reverse().join('');
// });
// console.log(arr, result);

// let arr = ['123', '456', '789'];

// let result = arr.map(function(elem) { 
// 	return elem.split('').map(function(str) {
// 		return +str;
// 	});
// });
// console.log(arr, result);

// let arr = [2, 4, 6, 8, 10];

// let result = arr.map(function(elem, index) {
// 	return elem*index;
// });

// console.log(result); 

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map(function(elem) {
	return elem.map(function(num) {
		return num * num;
	});
});

console.log(result);