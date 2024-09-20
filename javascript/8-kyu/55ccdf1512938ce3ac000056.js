function isLockNessMonster(s) {
  let clues = ["tree fiddy", "three fifty", "3.50"];
  for (let i = 0; i < clues.length; i++){
    if (s.includes(clues[i])){
      return true;
    }
  } return false;
}
