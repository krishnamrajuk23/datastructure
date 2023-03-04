/**
 * simple recursive function 
 * Hint: it will have two return statements
 */
var loopNTimes = function (n) {
  if (n <= 1) {
    return 'completed';
  }
  return loopNTimes(n - 1); // why return statements if you don't have then always return undefined
}

loopNTimes(10);

/**
 * @param {*} n - is a number
 */
var factorial = function (n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

/**
 * Recursive function takes array and reverse the array
 */
var reversedArray = [];
const reverseArray = function (arr) {
  if (arr.length > 0) {
    reversedArray.push(arr.pop);
    reverseArray(arr)
  }
  return;
}

arr = [1, 2, 4, 5, 6, 7];
reverseArray(arr);


/**
 * take an array, num and multiple each value of array with the num and print the result
 */
const recursiveFun = function (arr, num) {
  const finalResult = [];
  const arrMulWithNum = (arr, num) => {
    if (arr.length > 0) {
      const value = arr.shift();
      finalResult.push(value * num);
      arrMulWithNum(arr, num);
    }
    return;
  }
  arrMulWithNum(arr, num);
  return finalResult;
}
console.log(recursiveFun([1, 2, 3], 3))