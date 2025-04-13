// https://bigfrontend.dev/problem/implement-basic-throttle

function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T {}
