let arr = [1,2,3,4,5,6];
let result = 0;

function getRandom (min, max) {
    return Math.floor (Math.random() * (max - min + 1)) + min;
}

function getRandomElem(arr) {
    return getRandom (0, arr.length - 1)
}

for (let index = 0; index < 3; index++) {
    result+= getRandomElem(arr);    
}

console.log('Summ of 3 random elements is', result);