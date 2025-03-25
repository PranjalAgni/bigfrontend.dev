// https://bigfrontend.dev/problem/implement-Selection-Sort

// TC: O(N*N) | SC: O(1)
/**
 * @param {number[]} arr
 */
function selectionSort(arr) {
    const N = arr.length;
    for (let idx = 0; idx < N - 1; idx++) {
      let shouldSwap = false;
      let currentMinPos = idx;
      for (let jdx = idx + 1; jdx < N; jdx++) {
        if (arr[jdx] < arr[currentMinPos]) {
          currentMinPos = jdx;
          shouldSwap = true;
        }
      }
      
      if (shouldSwap) {
        [arr[idx], arr[currentMinPos]] = [arr[currentMinPos], arr[idx]];
      }
    }
  }