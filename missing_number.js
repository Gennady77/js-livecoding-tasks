console.log('===== missing number example =====');

function missing(arr) {
  let l = arr.length;
  let summ = 1;

  for (let i = 2; i <= l + 1; i++) {
    summ += i;
    summ -= arr[i - 2];
  }

  return summ;
}

console.log(missing([2, 1, 4, 5, 6]));
