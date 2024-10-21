// https://bigfrontend.dev/problem/implement-Promise-allSettled/

// Time: O(N) | Space: O(N)
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
async function allSettled(promises) {
  const result = [];
  for (const promise of promises) {
    if (promise instanceof Promise) {
      await promise
        .then((value) => {
          result.push({
            status: 'fulfilled',
            value,
          });
        })
        .catch((error) => {
          result.push({
            status: 'rejected',
            reason: error,
          });
        });
    } else {
      result.push({
        status: 'fulfilled',
        value: promise,
      });
    }
  }
  return result;
}
