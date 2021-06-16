
function getPerfect() {
    let perfectNumberArr = [];

    for (let index = 1; index < 100000; index++) {
        if (index == getSumOfDivisors(getDivisors(index))) {
            perfectNumberArr.push(index);
        }        
    }    
    return perfectNumberArr
}

function getDivisors(num) {
    let deviderArr = [];
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            deviderArr.push(i)
        }       
    }
    return deviderArr;
}

function getSumOfDivisors(arr) {
    let summOfArrElem = 0;
    for (const iterator of arr) {
        summOfArrElem += iterator;
    }
    return summOfArrElem;
}

console.log (getPerfect());