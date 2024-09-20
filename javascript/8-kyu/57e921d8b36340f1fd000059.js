function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin){
    sharkSpeed /= 2;
  }
  let mySwimmingTime = pontoonDistance / youSpeed;
  let sharkSwimmingTime = sharkDistance / sharkSpeed;
  if (mySwimmingTime < sharkSwimmingTime){
    return "Alive!";
  } return "Shark Bait!";
}
