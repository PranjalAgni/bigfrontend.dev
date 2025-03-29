// https://bigfrontend.dev/problem/implement-spyOn

// This problem is a great exercise for understanding the internals of commonly used libraries by implementing a basic version of jest.spyOn.
/**
 * @param {object} obj - The object containing the method to be spied on.
 * @param {string} methodName - The name of the method to spy on.
 * @returns {object} - An object containing a 'calls' array that records each call's arguments.
 */
function spyOn(obj, methodName) {
  const originalMethod = obj[methodName];
  if (!originalMethod) throw "Method doesn't exist";

  const spy = {
    calls: [],
  };

  obj[methodName] = function (...args) {
    spy.calls.push(args);
    return originalMethod.apply(this, args);
  };

  return spy;
}
