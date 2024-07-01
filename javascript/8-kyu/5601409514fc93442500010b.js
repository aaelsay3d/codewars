function betterThanAverage(classPoints, yourPoints) {
  let totalScore = 0;
  for (let i = 0; i < classPoints.length; i++){
    totalScore += classPoints[i];
  }
  let classAverage = totalScore / classPoints.length;
  return yourPoints > classAverage;
}
