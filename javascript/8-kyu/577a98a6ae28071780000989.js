var min = function(list){
  let minVal = list[0];
  for (let i = 1; i < list.length; i++){
    if (list[i] < minVal){
      minVal = list[i];
    }
  }
  return minVal;
}

var max = function(list){
  let maxVal = list[0];
  for (let i = 1; i < list.length; i++){
    if (list[i] > maxVal){
      maxVal = list[i];
    }
  }
  return maxVal;
}
