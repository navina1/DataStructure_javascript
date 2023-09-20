let arr = [1, 2, 3, 4, 5];
let pos = -1;

function deletion(arr, pos) {
    if (pos < 0) {
      throw new Error("Invalid position");
    }
  let n = arr.length;
  for (let i = pos; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  //arr[n-1] = null;
    arr.pop();
    //or arr.length=arr.length-1;
  return arr;
}
console.log(deletion(arr, pos));
