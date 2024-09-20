function toCsvText(array) {
  let commaSepratedValues = [];
  for (let i = 0; i < array.length; i++){
    commaSepratedValues.push(array[i].join(","));
  } return commaSepratedValues.join("\n");
}
