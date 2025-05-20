// https://bigfrontend.dev/problem/implement-range

// Time: O(1) | Space: O(N)
/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
  const arr = [];
  while (from <= to) {
    arr.push(from);
    from += 1;
  }

  return arr;
}
