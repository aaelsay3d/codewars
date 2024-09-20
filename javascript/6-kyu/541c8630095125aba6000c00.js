function digitalRoot(n) {
  while(true){
    let sum = 0;
    let nAsString = n.toString();
    if (nAsString.length === 1){
      return n;
    }
    for (let i = 0; i < nAsString.length; i++){
      sum += Number(nAsString[i]);
    } n = sum;
  }
}
