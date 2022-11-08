function SplitAndAdd(arr, k) {
  let n = arr.length;
  let tmp = new Array(n * 2);
  for (let i = 0; i < tmp.length; i++) {
    tmp[i] = 0;
  }

  for (let i = 0; i < n; i++) {
    tmp[i] = arr[i];
    tmp[i + n] = arr[i];
  }

  for (let i = k; i < k + n; i++) {
    arr[i - k] = tmp[i];
  }
}

let arr = [12, 10, 5, 6, 52, 36];
SplitAndAdd(arr, 2);
console.log(arr); // [5, 6, 52, 36, 12, 10]
