// https://bigfrontend.dev/problem/implement-lodash-get

/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
  const pathList = Array.isArray(path)
    ? path
    : path.replace('[', '.').replace(']', '').split('.');
  if (!pathList.length) return defaultValue;
  let current = source;
  for (const key of pathList) {
    current = current[key];
  }

  return !!current ? current : defaultValue;
}
