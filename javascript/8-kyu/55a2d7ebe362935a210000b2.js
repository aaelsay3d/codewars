function findSmallestInt(args) {
  let smallest = Infinity;
  for (let i = 0; i < args.length; i++){
    if (args[i] < smallest) {
      smallest = args[i];
    }
  }
  return smallest;
}
