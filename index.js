function func(num1) {
	return function(num2) {
		return function(num3) {
			return function(num4) {
				return function(num5) {
					let arr = [];
					for (let index = 0; index < 5; index++) {						
						eval('arr[' + index + '] = num' +(index+1))	
					};
					return arr;
				};
			};	
		};
	};
}

console.log (func(2)(3)(4)(5)());