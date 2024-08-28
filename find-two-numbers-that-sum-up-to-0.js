// https://bigfrontend.dev/problem/Find-two-numbers-that-sum-up-to-0
// Standard 2-sum problem

// TC: O(NlogN) | Space: O(1)
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  // your code here
  arr = arr.sort();
  const N = arr.length;
  let left = 0;
  let right = N - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) return [left, right];
    else if (sum > 0) right -= 1;
    else left += 1;
  }

  return null;
}
