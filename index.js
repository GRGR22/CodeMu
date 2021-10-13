let result = filter([-1, 2, 3, 4, 5], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result);

function filter(arr, callback) {
	let result = [];
	
	for (let i = 0; i<arr.length; i++) {
		callback(arr[i]) ? result.push(arr[i]): 0; 
	}
	
	return result;
}