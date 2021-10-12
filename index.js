let func = (function() {
	let num = 1;
	
	return function() {
		alert(num);
		num++;
		num>5 ? num = 0: 0;
	}
})();
for (i=0; i<10; i++) {
	func();
};