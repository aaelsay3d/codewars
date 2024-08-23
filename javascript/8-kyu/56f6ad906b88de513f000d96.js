function bonusTime(salary, bonus) {
  if (bonus){
    salary *= 10;
  }
  return `\u00A3${salary}`;
}
