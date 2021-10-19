// let button = document.querySelector('#button');
// let paragraph   = document.querySelector('.paragraph');
// let link   = document.querySelector('.link');

// button.addEventListener('click', function() {
// 	paragraph.innerHTML = `(${link.href})`;
// })
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let paragraph = document.querySelector('.paragraph');
let picture1 = document.querySelector('.picture1');
let picture1_src = picture1.src;
let picture2 = document.querySelector('.picture2');
let picture2_src = picture2.src;

button1.addEventListener('click', function() {
	picture1.src = picture2_src;
})
button2.addEventListener('click', function() {
	picture2.src = picture1_src;
})