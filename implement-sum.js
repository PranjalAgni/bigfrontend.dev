// https://bigfrontend.dev/problem/create-a-sum
// TC: O(N) | Space: O(1)
// came to zero 40
// sunday today, training from tomorrow
/**
 * @param {number} num
 */
function sum(num) {
  const f = (num2) => {
    if (num2) return sum(num + num2);
    else return num;
  }

  f.valueOf = () => num;
  return f;
}
