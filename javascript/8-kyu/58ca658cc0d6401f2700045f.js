function findMultiples(integer, limit) {
  let multiples = [];
  let value = integer;
  for (let i = integer; i <= limit; i+= value){
    multiples.push(i);
  } return multiples;
}
