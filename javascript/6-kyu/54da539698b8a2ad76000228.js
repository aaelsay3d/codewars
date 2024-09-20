function isValidWalk(walk) {
  if (walk.length === 10){
    let n = 0, s = 0, w = 0, e = 0;
    for (let i = 0; i < walk.length; i++){
      let dir = walk[i];
      if (dir === 'n') {n++;}
      else if (dir === 's') {s++;}
      else if (dir === 'e') {e++;}
      else if (dir === 'w') {w++;} 
    }
    return s === n && w === e;
  } return false;
}
