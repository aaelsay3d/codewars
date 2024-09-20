function binToDec(bin) {
  bin = bin.split("").reverse().map(n => parseInt(n));
  let decimal = 0;
  for (let i = 0; i < bin.length; i++){
    if (bin[i] === 1){
      decimal += 2 ** i;
    }
  }
  return decimal;
}
