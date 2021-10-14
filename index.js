let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = each(arr, (elem, index) => (elem * index > 10) );

console.log(result);

function each (arr, cb) {
	let res = [];
	for (i=0; i< arr.length; i++) {
		for (j=0; j< arr[i].length; j++) {
			res.push(cb(arr[i] [j], i+j))
		}
	}
	return res
};