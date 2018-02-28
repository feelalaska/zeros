module.exports = function getZerosCount(number) {
  // your implementation
  var sum = 0;
  for (var i=5; i <= number; i*=5) {
    sum += Math.floor(number/i);
  }
  return sum;
}
