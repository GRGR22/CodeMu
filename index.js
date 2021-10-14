let result = alternate(
	['a', 'b', 'c', 'd', 'e'],
	function(elem) {
		return elem + '!';
	},
	function(elem) {
		return elem + '?';
	},
);

console.log(result);

function alternate(arr, callback1, callback2) {
	let result = [];
	
	for (let i = 0; i<arr.length; i++) {
		((i+1) % 2) ? result.push(callback1(arr[i])):  result.push(callback2(arr[i]));
	}	
	return result;
}