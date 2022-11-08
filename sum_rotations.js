console.log('===== sum rotations example =====');

function maxSum(arr) {
  // Find array sum and i*arr[i] with no rotation
  let n = arr.length;
  let arrSum = 0; // Stores sum of arr[i]
  let currVal = 0; // Stores sum of i*arr[i]
  for (let i = 0; i < n; i++) {
    arrSum = arrSum + arr[i];
    currVal = currVal + i * arr[i];
  }

  // Initialize result as 0 rotation sum
  let maxVal = currVal;

  // Try all rotations one by one and find
  // the maximum rotation sum.
  for (let j = 1; j < n; j++) {
    currVal = currVal + arrSum - n * arr[n - j];
    if (currVal > maxVal) maxVal = currVal;
  }

  // Return result
  return maxVal;
}

let arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(maxSum(arr)); //330

let arr2 = [1, 20, 2, 10];
console.log(maxSum(arr2)); //72
