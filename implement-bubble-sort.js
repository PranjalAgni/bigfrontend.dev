// https://bigfrontend.dev/problem/implement-Bubble-Sort

// Time: O(N*N) | Space: O(1)
/**
 * @param {number[]} arr
 */
function bubbleSort(arr) {
    if (!arr) return;
    const N = arr.length;
    for (let idx = 0; idx < N - 1; idx++) {
      for (let jdx = idx + 1; jdx < N; jdx++) {
          if (arr[jdx] < arr[idx]) {
            // fancy swapping logic if i remember correctly
            [arr[idx], arr[jdx]] = [arr[jdx], arr[idx]];
          }
      }
    }
  }
  