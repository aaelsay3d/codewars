function nextId(ids){
  ids = ids.sort((a, b) => a - b);
  
  if (ids[0] !== 0){
    return 0
  }
  
  for (let i = 0; i < ids.length - 1; i++){
    let current = ids[i];
    let next = ids[i + 1];
    if (next - current > 1){
      return current + 1;
    }
  }
  
  return ids[ids.length - 1] + 1;
}
