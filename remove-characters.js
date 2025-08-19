// https://bigfrontend.dev/problem/remove-characters

// Time: O(n) | Space: O(N)
function removeChars(input: string): string {
  const stack = [];
  for (const char of input) {
    if (char !== 'b') {
      stack.push(char);
    }
  }

  // some manipulation logic here
  let isFound = stack.length > 0;
  while (isFound) {
    isFound = false;
    for (let idx = 1; idx < stack.length; idx++) {
      if (stack[idx] === 'c' && stack[idx - 1] === 'a') {
        isFound = true;
        stack.splice(idx - 1, 2);
      }
    }
  }

  if (!stack.length) {
    stack.push('');
  }

  return stack.join('');
}
