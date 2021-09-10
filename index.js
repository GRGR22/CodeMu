// let arr = [2,5,9]
// let math = {
//     summOfArrElem: function(array) {
//          return array.reduce((a, b) => a + b, 0)
//     },
// 	summOfArrsquare: function(array) {return array.reduce((a, b) => a + b*b, 0)},
// 	cube: function(array) {return array.reduce((a, b) => a + Math.pow(b, 3), 0)},
// };
// console.log( math.summOfArrElem(arr) );
// console.log( math.summOfArrsquare(arr) ); 
// console.log( math.cube(arr) );

test(
	function() {return 1;},
	function() {return 2;},
    function() {return 4;}
);

function test(func1, func2, func3) {
	alert( func1() + func2() + func3());
}