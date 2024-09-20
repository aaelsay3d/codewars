function elevator(left, right, call){
  
  let leftDistance = Math.abs(left - call);
  let rightDistance = Math.abs(right - call);
  
  if (leftDistance < rightDistance){
    return "left";
  } return "right";
  
}
