// https://bigfrontend.dev/problem/get-DOM-tree-height

// Solved using BFS
/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  if (!tree) return 0;
  const queue = [];
  queue.push({
    node: tree,
    height: 1,
  });

  let maxHeight = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    maxHeight = Math.max(maxHeight, current.height);
    const childrenList = [...current.node.children];
    childrenList.forEach((currentChildNode) => {
      queue.push({
        node: currentChildNode,
        height: current.height + 1,
      });
    });
  }

  return maxHeight;
}
