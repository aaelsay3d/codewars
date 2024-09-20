function differenceInAges(ages){
  ages.sort((a, b) => a -b);
  let oldest = ages[ages.length - 1];
  let youngest = ages[0];
  return [youngest, oldest, oldest - youngest];
}
