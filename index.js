let res = [];
function func(arr) {
	
	for (let elem of arr) {		
		if (Array.isArray(elem)) {
			func(elem);
		} else {
			res.push(elem);
		}
	}
	return res;
}
func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
console.log(res);