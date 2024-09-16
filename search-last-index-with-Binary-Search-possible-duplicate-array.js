// https://bigfrontend.dev/problem/search-last-index-with-Binary-Search-possible-duplicate-array
// TC: O(logN) | Space: O(1)
// Need to be back with grind
// Let's solve some problems

/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function lastIndex(arr, target) {
  const N = arr.length;
  let low = 0;
  let high = N;
  let answer = -1;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === target) {
      answer = Math.max(mid, answer);
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}
