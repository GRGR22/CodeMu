
function isFreindly(num1, num2) {
    let sum1 = getSum(getOwnDivisors(num1));
    let sum2 = getSum(getOwnDivisors(num2));
    
    if (sum1 == num2 && sum2 == num1) {
        return true;
    } else {
        return false;
    }
}

function getOwnDivisors(num) {
    let deviderArr = [];
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            deviderArr.push(i)
        }       
    }
    return deviderArr;
}

function getSum(arr) {
    let summOfArrElem = 0;
    for (const iterator of arr) {
        summOfArrElem += iterator;
    }
    return summOfArrElem;
}

function getFreindly () {
    let number1;
    let number2;
    let resultArr = [];    
    for (number1 = 1; number1<=9000; number1++) {
        for (number2 = number1 + 1; number2<=9000; number2++) {
            let halfResultArr = [];
            if (isFreindly(number1, number2)){
            halfResultArr.push(number1);
            halfResultArr.push(number2);
            resultArr.push(halfResultArr);
            }
        }        
    }
    return resultArr;
}
console.log (getFreindly());