let result = each(['арбуз', 'зарбу', 'узарб', 'бузар', 'рбуза'], function(str) {
	let newStr = str.split('');
	newStr[0] = newStr[0].toUpperCase();
	return newStr.join('') ;
});

console.log(result);

function each(arr, callback) {
	console.log(arr);
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}