//every возвращает true, если для всех элементов массива коллбэк вернул true

// let arr = [2, 4, 6, 8];

// let result = arr.every(elem => elem % 2 == 0);
// console.log(result); // true

let arr = [-2, 4, 6, 8];

console.log(arr.every(elem => elem > 0));