function isVow(a){
  let vowels = "aeiou";
  for (let i = 0; i < a.length; i++) {
    if (vowels.indexOf(String.fromCharCode(a[i])) !== -1){
      a[i] = String.fromCharCode(a[i]);
    }
  }
  return a;
}
