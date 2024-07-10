const reverseSeq = n => {
  let newArray = [];
  for (let i = 1; i <= n; i++){
    newArray.unshift(i);
  }
  return newArray;
};
