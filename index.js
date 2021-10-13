let result = filter([1, 2, 1, 0, 5], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result);

function filter(arr, callback) {
	let result = true;
	
	for (let i = 0; i<arr.length; i++) {
		if (!callback(arr[i])) {
			result = false;
			break;
		}; 
	}	
	return result;
}