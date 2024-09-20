String.prototype.digit = function() {
  return this.match(/^[0-9]$/g) !== null;
};
