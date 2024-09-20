function findUniq(arr) {
  arr = arr.sort(function (a, b){return a - b;});
  if (arr[0] === arr[1]){
    return arr[arr.length - 1];
  } return arr[0];
}
