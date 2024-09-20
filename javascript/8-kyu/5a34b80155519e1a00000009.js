function multipleOfIndex(array) {
  let multiples = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] % i === 0 || array[i] === 0 && i === 0){
      multiples.push(array[i]);
    } 
  } return multiples;
}
