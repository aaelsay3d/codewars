function points(games) {
  let xPoints = 0;
  for (let i = 0; i < games.length; i++){
    let xResult = parseInt(games[i][0]);
    let yResult = parseInt(games[i][2]);
    if (xResult > yResult){
      xPoints += 3;
    } else if (xResult === yResult){
      xPoints++;
    }
  }
  return xPoints;
}
