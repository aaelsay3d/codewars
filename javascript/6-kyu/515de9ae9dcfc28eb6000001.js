function solution(str){
   if (!str){
     return [];
   }
  let arrayOfStrings = [];
  for (let i = 0; i < str.length; i+=2){
    arrayOfStrings.push(str[i] + str[i + 1]);
  }
  if (str.length % 2 !== 0){
    arrayOfStrings.pop();
    arrayOfStrings.push(str[str.length - 1] + "_");
  }
  return arrayOfStrings;
}
