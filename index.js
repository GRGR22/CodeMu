
function func() {
	let count = 10;
	return function counting () {
		if (count > 0) { 
			alert (count);
			count--;
		} else { 
			alert ('count<=0');
		}						
	}
}
let countOfFuncCall = func();
while (true) {
	countOfFuncCall ();
}
