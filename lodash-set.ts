// https://bigfrontend.dev/problem/lodash-set
// fri aug 23 2024 13:06

// Time: O(N) | Space: O(N)
// N = len(path)
function set<T extends object>(obj: T, path: string | string[], value: any) {
  let processedKeys: any[] = [];
  if (typeof path === 'string') {
    processedKeys = path.replace('[', '.').replace(/]/g, '').split('.');
  } else {
    processedKeys = path;
  }

  const lastKey = processedKeys[processedKeys.length - 1];
  let isArray = false;

  if (
    Number.isInteger(parseInt(lastKey)) &&
    !(lastKey.length > 1 && lastKey[0] === '0')
  ) {
    const index = parseInt(lastKey);
    processedKeys.pop();
    processedKeys.push(index);
    isArray = true;
  }

  let answer: Record<string, any> = obj;
  let current = answer;
  const totalKeys = processedKeys.length;
  for (let idx = 0; idx < totalKeys - 1; idx++) {
    let key = processedKeys[idx] as string;
    if (!current.hasOwnProperty(key)) {
      let val = {};
      if (idx === totalKeys - 2 && isArray) val = [];
      current[key] = val;
    }

    current = current[key];
  }

  const second = processedKeys[totalKeys - 1];
  if (isArray) {
    current[second] = value;
  } else {
    current[second] = value;
  }

  return obj;
}
