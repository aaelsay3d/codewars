function persistence(num) {
  let persistence = 0;
  while (true){
    let numAsString = num.toString();
    if (numAsString.length === 1){
      return persistence;
    }
    let product = 1;
    for (let i = 0; i < numAsString.length; i++){
      let digit = Number(numAsString[i]);
      product *= digit;
    }
    num = product;
    persistence++;
  }
}
