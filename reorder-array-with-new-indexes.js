/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  // reorder items inline
  const newItems = new Array(items.length).fill(0);
  let pos = 0;
  for (const idx of newOrder) {
    newItems[pos] = items[idx];
    pos += 1;
  }

  return newItems;
}
