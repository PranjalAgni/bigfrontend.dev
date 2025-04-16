// https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option
// This is a Typescript coding problem from BFE.dev

function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  option: { leading: boolean; trailing: boolean } = {
    leading: true,
    trailing: true,
  }
): T {
  // your code here
}
