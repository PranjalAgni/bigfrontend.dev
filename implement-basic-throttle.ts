// https://bigfrontend.dev/problem/implement-basic-throttle

function throttle<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let cooling = false;
  let result: any = null;
  let lastArgs: any = null;
  return function (...args: any[]) {
    if (!cooling) {
      cooling = true;
      result = func(...args);
      setTimeout(() => {
        cooling = false;
        if (lastArgs) {
          func(...lastArgs);
          lastArgs = null;
        }
      }, wait);
    } else {
      lastArgs = args;
    }

    return result;
  } as T;
}
