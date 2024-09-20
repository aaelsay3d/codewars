function well(x){
  let goodIdeas = 0;
  for (let i = 0; i < x.length; i++){
    if (x[i] === "good"){
      goodIdeas++;
    }
  } return goodIdeas === 0 ? "Fail!" : goodIdeas > 2 ? "I smell a series!" : "Publish!";
}
