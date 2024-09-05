// https://bigfrontend.dev/problem/improve-a-function
// Currently wip
// still need to solve it
// TC: O(N) | SC: O(N)

/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  const answer = [];
  excludes.forEach((pair) => {
    const current = items.filter((item) => !(item[pair.k] === pair.v));
    answer.push(...current);
  });

  return answer;
}
// function excludeItems(items, excludes) {
//   const answer = [];
//   const N = items.length;
//   const excludeMap = new Map();
//   for (const exclude of excludes) {
//     excludeMap.set(`${exclude.k}_${exclude.v}`, true);
//   }

//   for (let idx = 0; idx < N; idx++) {
//     const item = items[idx];
//     const
//   }
// }
