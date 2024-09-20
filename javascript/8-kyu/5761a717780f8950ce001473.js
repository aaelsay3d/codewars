function  calculateAge(...years) {
  let first = years[0];
  let second = years[1];
  let difference = Math.abs(first - second);
  if (first === second) {
    return `You were born this very year!`;
  } else if (first > second){
    if (difference === 1) {
      return `You will be born in ${difference} year.`;
    } return `You will be born in ${difference} years.`;
  } else {
    if (difference === 1){
      return `You are ${second - first} year old.`;
    } return `You are ${second - first} years old.`;
  }
}
