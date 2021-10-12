// (function(num1, num2) {
// 	let sum = num1 + (function(n) {
// 	return n;
// })(num2);
// return sum;
// })(1)(2);
(function(v) {	
	return function(n) {
		return function(z) {
			console.log(n+v+z);
		};
	};
})(1)('dfg')('dfg');