function remove (string) {
  let lastIndex = string.length - 1
  if (string[lastIndex] === '!'){
    return string.slice(0, lastIndex);
  } return string;
}
