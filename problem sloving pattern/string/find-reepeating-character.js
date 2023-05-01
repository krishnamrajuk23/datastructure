// Maximum repeating character for every index in given String

function findLargest(str) {
  let arrWithZeroValue = new Array(126).fill(0);
  let max = 0, charMax = '';
  for (let i = 0; i < str.length; i++) {
    let ch = str[i].charCodeAt();
    arrWithZeroValue[ch]++
    console.log("check the updated arrWithZeroValue array", ch, arrWithZeroValue[ch]++);
    if (arrWithZeroValue[ch] > max) {

      max = arrWithZeroValue[ch];
      charMax = ch;
    }
  }

  console.log("maximum repeated character is " + String.fromCharCode(charMax) + "and count is" + max);
}

findLargest("parallel"); // Output: 'l' ---> letter l;