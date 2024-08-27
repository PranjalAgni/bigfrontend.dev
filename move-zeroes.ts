// https://bigfrontend.dev/problem/move-zeros
// easy algorithmic question
// Time: O(N) | Space: O(1)
function moveZeros(list: Array<any>): void {
  // your code here
  let pos = 0;
  let idx = 0;
  const N = list.length;
  while (idx < N) {
    const elt = list[idx];
    list[pos] = elt;
    if (elt !== 0) pos += 1;
    idx += 1;
  }

  while (pos < N) {
    list[pos] = 0;
    pos += 1;
  }
}
