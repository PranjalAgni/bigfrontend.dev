// https://bigfrontend.dev/problem/implement-groupby

// Time: O(N) | Space: O(N)
function ObjectGroupBy<T, K extends keyof any>(
  items: Array<T>,
  callback: (item: T) => K
): Record<K, Array<T>> {
  return items.reduce((acc, current) => {
    const newk = callback(current);
    if (!acc[newk]) acc[newk] = [];
    acc[newk].push(current);
    return acc;
  }, Object.create(null) as Record<K, Array<T>>);
}
