function removeChars(input: string): string {
  const stack = [];
  for (const char of input) {
    if (char !== 'c') {
      stack.push(char);
    }
  }

  // some manipulation logic here
  while (stack.length > 0) {
    // ??
  }
}
