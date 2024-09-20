function digPow(n, p){
  n = n.toString();
  let sum = 0;
  for (let i = 0; i < n.length; i++){
    sum += Math.pow(parseInt(n[i]), p);
    p++;
  } 
  n = parseInt(n);
  if (sum % n === 0){
    return sum / n;
  } return -1;
}
