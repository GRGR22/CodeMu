let result = each([2, 3, 4, 5, 6], function(elem, 
	index) { 
	return elem * index;
});

console.log(result);

function each(arr, callback) {
	let result = [];
	
	for (let i = 0; i<arr.length; i++) {
		result.push( callback(arr[i], i) ); 
	}
	
	return result;
}