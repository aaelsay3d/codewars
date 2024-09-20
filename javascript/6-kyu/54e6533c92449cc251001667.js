var uniqueInOrder=function(iterable){
  if (iterable.length === 0){
    return [];
  }
  
  let uniqueItems = [iterable[0]];
  for (let i = 1; i < iterable.length; i++){
    if (iterable[i] !== iterable[i - 1]){
      uniqueItems.push(iterable[i]);
    }
  } return uniqueItems;
}
