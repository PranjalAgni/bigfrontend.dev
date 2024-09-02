// https://bigfrontend.dev/problem/implement-Array-prototype-reduce
// TC: O(N) | SC: O(1)
Array.prototype.myReduce = function (...args) {
  const that = this;
  const N = that.length;
  let isInitialValueProvided = args.length > 1;
  if (N === 0) {
    if (!isInitialValueProvided)
      throw new TypeError("Expected function to throw an exception");
    else return args[1];
  }

  let idx = 1;
  let val = that[0];
  if (isInitialValueProvided) {
    val = args[1];
    idx -= 1;
  }

  for (; idx < N; idx++) {
    val = args[0](val, that[idx], idx, that);
  }

  return val;
};
