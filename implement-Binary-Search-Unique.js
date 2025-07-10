// binary search in JS
// Time: O(logn) | Space: O(1)
/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
  // your code here
  const N = arr.length;
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    const mid = left + (right - left) / 2;
    if (target == arr[mid]) return mid;
    else if (target > arr[mid]) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
