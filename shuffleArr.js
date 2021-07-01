let arr = [1,2,3,4,5,6];
let result = [];

function getRandom (min, max) {
    return Math.floor (Math.random() * (max - min + 1)) + min;
}

function getRandomElem() {
    return getRandom (0, arr.length - 1)
}

while (arr.length > 0) {
    let randomElem = arr.splice(getRandomElem(), 1)[0];
    result.push(randomElem);
    console.log(randomElem);
}

console.log(result);