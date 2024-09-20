function arrayDiff(a, b) {
  let newArray = [];
  for (let i = 0; i < a.length; i++){
    if(!b.includes(a[i])){
      newArray.push(a[i]);
    }
  } return newArray;;
}
