function findOdd(a) {
  let counter = {};
  for (let i = 0; i < a.length; i++){
    if (a[i] in counter){
      counter[a[i]]++;
    } else {
      counter[a[i]] = 1;
    }
  }
  for (let num in counter){
    if (counter[num] % 2 !== 0){
      return parseInt(num);
    }
  }
}
