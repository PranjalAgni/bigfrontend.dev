/**
 * @param {number} num
 */
function sum(num) {
  let total = num;
  return (val) => {
    total += val;
    return total;
  }
}
