// https://bigfrontend.dev/problem/Next-Right-Sibiling

/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
  // your code here
  let q = [root];
  let isTargetReached = false;
  while (q.length > 0) {
    const childrens = [];
    while (q.length > 0) {
      const node = q.shift();
      if (isTargetReached) return node;
      if (node == target) isTargetReached = true;
      const childNodes = node.children;
      childrens.push(...childNodes);
    }

    q = childrens;
  }

  return null;
}
