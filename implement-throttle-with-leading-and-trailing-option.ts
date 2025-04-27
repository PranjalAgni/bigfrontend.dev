// https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option
// This is a Typescript coding problem from BFE.dev

// Nice problem and little modification on the basic throttling function
// Solution elaboration: https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option/discuss


function throttle<T extends (...args: any[]) => any>(
  func: T, 
  wait: number, 
  option: {leading: boolean, trailing: boolean } = {leading: true, trailing: true}
  ): T {
  // your code here
  let cooling = false;
  let lastArgs = null;
  let result = null;

  return function(...args: any[]): T {
    if (!cooling) {
      cooling = true;
      const startWait = () => setTimeout(() => {
        if (option.trailing && lastArgs) {
          result = func(...lastArgs);
          lastArgs = null;
          startWait();
        } else {
          cooling = false;
        }
      }, wait);

      if (option.leading) {
        result = func(...args);
      } else {
        lastArgs = args;
      }

      startWait();
    } else {
      lastArgs = args;
    }

    return result;
  }
}
