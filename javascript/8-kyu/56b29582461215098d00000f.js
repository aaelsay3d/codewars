function pipeFix(numbers){
  let end = Math.max(...numbers);
  let start = Math.min(...numbers);
  let pipes = [];
  for (let i = start; i <= end; i++){
    pipes.push(i);
  } return pipes;
}
