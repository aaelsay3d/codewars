function pickIt(arr){
  let odd = [], even = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  return [odd,even];
}
