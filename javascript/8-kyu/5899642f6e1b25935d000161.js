function mergeArrays(arr1, arr2) {
  let set = new Set(arr1.concat(arr2))
  let lst = [...set];
  return lst.sort(function(a, b){return a - b;});
}
