function quadrant(x, y) {
  if (x > 0 && y > 0){
    return 1;
  } else if (x < 0 && y < 0){
    return 3;
  } else if (x > 0 && y < 0){
    return 4;
  } return 2;
}
