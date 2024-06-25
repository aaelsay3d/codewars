function findNeedle(haystack) {
  let index = haystack.indexOf("needle");
  if (index !== -1){
    return `found the needle at position ${index}`;
  }
}
