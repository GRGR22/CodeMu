let arr1 = [1,2,3];
let arr2 = [2,3,4];
console.log(getCrossInArr(arr1, arr2));

function getCrossInArr (arr1, arr2) {
    let result = [];
    for (const key of arr1) {
        if (arr2.indexOf(key) == -1) {
            result.push(key)
        }
    }
    for (const key of arr2) {
        if (arr1.indexOf(key) == -1) {
            result.push(key)
        }
    }
    return result;
}
