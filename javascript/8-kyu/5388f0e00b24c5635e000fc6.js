function swapValues() {
    let args = Array.prototype.slice.call(arguments);
    let temp = args[0][0];
    args[0][0] = args[0][1];
    args[0][1] = temp;
}
