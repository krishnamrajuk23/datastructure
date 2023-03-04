function mergeSort(array) {
  // Base case: if the array has less than or equal to 1 element, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two halves
  const midIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midIndex);
  const rightArray = array.slice(midIndex);

  // Recursively sort the left and right halves
  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  // Merge the two sorted halves
  return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftArray, rightArray) {
  const mergedArray = [];

  // Compare elements in both arrays and add the smaller one to the merged array
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      mergedArray.push(leftArray.shift());
    } else {
      mergedArray.push(rightArray.shift());
    }
  }

  // Add any remaining elements from the left or right array to the merged array
  while (leftArray.length) {
    mergedArray.push(leftArray.shift());
  }
  while (rightArray.length) {
    mergedArray.push(rightArray.shift());
  }

  return mergedArray;
}

// Example usage
const unsortedArray = [5, 3, 8, 4, 2, 7, 1, 6];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
