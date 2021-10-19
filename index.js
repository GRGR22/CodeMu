// ****** Text field *******

// let elem = document.querySelectorAll('#elem');
// let result = document.querySelector('#result')
// let btn = document.querySelector('#button1');

// btn.addEventListener('click', function () {
//     let res = 0;
//     for (const i of elem) {        
//        res += +i.value 
//     }
//     result.innerHTML = res/elem.length
// })

// ******* Focus *******

let elem = document.querySelector('#elem');
elem.addEventListener('focus', function() {
	elem.value = '';
});
// elem.addEventListener('focusout', function() {
// 	alert (elem.value**2);
// });