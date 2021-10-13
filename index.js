let result = each(['12', '23', '34', '45', '56'], function(str) {
	return str.split('').reverse().join('') ;
});

console.log(result);

function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}