// function get1() {
// 	return 1;
// }
// function get2() {
// 	return 2;
// }

// test(get1, get2); // выведет 3

// function test(func1, func2) {
// 	alert( func1() + func2() );
// }
let get1 = function() {
	return 1;
}
let get2 = function() {
	return 2;
}

test(get1, get2); // выведет 3

function test(func1, func2) {
	alert( func1() + func2() );
}