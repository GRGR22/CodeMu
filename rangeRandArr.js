let range = [2, 7];
let resultArr = [];
while (resultArr.length<=range[1]-range[0]) {
    let elem = getRandom();
    if (resultArr.indexOf(elem) == -1)  resultArr.push(elem);
}
function getRandom () {
    return Math.floor (Math.random() * (range[1] - range[0] + 1)) + range[0];
}
console.log(resultArr)