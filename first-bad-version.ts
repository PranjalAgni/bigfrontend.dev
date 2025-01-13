// This is a JavaScript coding problem from BFE.dev
// Great Binary search problem
// asked at Meta

type IsBad = (version: number) => boolean;

function firstBadVersion(isBad: IsBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  let minVersion = -1;
  return (version: number): number => {
    // write your code to return the first bad version
    // if none found, return -1
    let left = 0;
    let right = version;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const status = isBad(mid);
      if (status) {
        right = mid - 1;
        minVersion = mid;
      } else {
        left = mid + 1;
      }
    }

    return minVersion;
  };
}
