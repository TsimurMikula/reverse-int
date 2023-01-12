module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
      }
    arrNumber = n.toString().split('').reverse().join(''); 
    return arrNumber;
}
