function getLength(arr){
  return arr.length;
}

function getFirst(arr){
  return arr[0];
}

function getLast(arr){
  return arr[getLength(arr) - 1];
}

function pushElement(arr){
  let el=1;
  arr.push(el);
  return arr
}

function popElement(arr){
  arr.pop();
  return arr;
}
