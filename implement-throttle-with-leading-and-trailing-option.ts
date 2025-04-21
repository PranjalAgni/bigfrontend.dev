// https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option
// This is a Typescript coding problem from BFE.dev

// This is a JavaScript coding problem from BFE.dev

function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  option: { leading: boolean; trailing: boolean } = {
    leading: true,
    trailing: true,
  }
): T {
  // your code here
  let cooling = false;
  let lastArgs = null;
  let result = null;

  return function (...args: any[]): T {
    if (!cooling) {
      cooling = true;

      if (option.leading) {
        result = func(...args);
      }

      setTimeout(() => {
        cooling = false;
        if (option.trailing) {
          result = func(...args);
        }

        if (lastArgs) {
          if (option.leading || option.trailing) {
            result = func(...lastArgs);
          }
          lastArgs = null;
        }
      }, wait);
    } else {
      lastArgs = args;
    }

    return result;
  };
}
