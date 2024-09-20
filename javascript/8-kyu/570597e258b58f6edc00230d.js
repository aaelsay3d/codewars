function array(string) {
  let length = string.split(",").length;
  if (length <= 2){
    return null;
  } return string.split(",").slice(1, length - 1).join(" ");
}
