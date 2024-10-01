function highAndLow(numbers){
  numbers = numbers.split(" ").map(num => parseInt(num));
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
