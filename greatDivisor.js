console.log(getGreatestCommonDivisor(14, 28))
function getGreatestCommonDivisor(num1, num2) {
    divisorsOfNum1 = getDivisor(num1);
    divisorsOfNum2 = getDivisor(num2);
    return getCrossInArr (divisorsOfNum1, divisorsOfNum2);
}
function getDivisor (num) {
    let divArr = [];
    for (let i = 1; i < num; i++){
        num % i == 0 ? divArr.push(i) : 0;
    }
    divArr.sort(function(a, b) {
        return b-a;
      });
    return divArr;
}
function getCrossInArr (arr1, arr2) {
    for (const key of arr1) {
        if (arr2.indexOf(key) !== -1) return key;
    }
}