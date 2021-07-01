let arr = [1,2,3,4,5,6];

function getRandom (min, max) {
    return Math.floor (Math.random() * (max - min + 1)) + min;
}

function getRandomElem(arr) {
    return getRandom (0, arr.length - 1)
}

console.log(getRandomElem(arr));