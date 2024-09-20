function calculateTip(amount, rating) {
  rating = rating.toLowerCase();
  let ratings = {"terrible": 0, "poor": 0.05, "good": 0.10, "great": 0.15, "excellent": 0.20}
  if (!(rating in ratings)){
    return "Rating not recognised";
  }
  
  return Math.ceil(amount * ratings[rating]);
}
