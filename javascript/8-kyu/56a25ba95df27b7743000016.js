function validateCode (code) {
  let re = /^[123]/
  return re.test(code);
}
