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