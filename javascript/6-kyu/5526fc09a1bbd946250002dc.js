function findOutlier(integers){
  let evenIntegers = integers.filter(n => n % 2 === 0);
  let oddIntegers = integers.filter(n => n % 2 !== 0);
  return evenIntegers.length === 1 ? evenIntegers[0] : oddIntegers[0];
}
