var hotpo = function(n){
  if(n == 0) return 0; 
  let times = 0;
  while (n !== 1){
    if (n % 2 === 0){
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    times++;
  }
  return times;
}
