console.log('===== sum rotations example =====');

function maxSum(arr) {
  let n = arr.length;
  let arrSum = 0;
  let currVal = 0;
  for (let i = 0; i < n; i++) {
    arrSum = arrSum + arr[i];
    currVal = currVal + i * arr[i];
  }

  let maxVal = currVal;

  for (let j = 1; j < n; j++) {
    currVal = currVal + arrSum - n * arr[n - j];
    if (currVal > maxVal) maxVal = currVal;
  }

  return maxVal;
}

let arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(maxSum(arr)); //330

let arr2 = [1, 20, 2, 10];
console.log(maxSum(arr2)); //72
