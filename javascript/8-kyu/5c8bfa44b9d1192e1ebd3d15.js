function warnTheSheep(queue) {
  let length = queue.length;
  let startIndex = length - 1;
  
  for (let i = startIndex; i >= 0; i--){
    if (queue[i] === "wolf"){
      if (i === length - 1){
        return "Pls go away and stop eating my sheep";
      } else {
        let sheepIndex = length - (i + 1);
        return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
      }
    }
  }
}
