function getGrade (s1, s2, s3) {
  let total = s1 + s2 + s3;
  let average = total / 3;
  if (average >= 90 && average <= 100){
    return "A";
  } else if (average >= 80 && average < 90){
    return "B";
  } else if (average >= 70 && average < 80){
    return "C";
  } else if (average >= 60 && average < 70){
    return "D";
  } else {
    return "F";
  }
}
