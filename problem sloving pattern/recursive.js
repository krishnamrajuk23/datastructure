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

arr = [1, 2, 4, 5, 6, 7]
reverseArray(arr)