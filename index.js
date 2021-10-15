//some возвращает true, если хотя бы для одного элемента коллбэк вернул true
let arr = [2, 4, 6, 8];

console.log(arr.some(elem => elem > 0));