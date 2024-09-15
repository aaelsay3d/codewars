function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let filteredBirds = [];
  for (let i = 0; i < birds.length; i++){
    if (!geese.includes(birds[i])){
      filteredBirds.push(birds[i]);
    }
  } return filteredBirds;
};
