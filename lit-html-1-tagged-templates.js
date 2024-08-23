// https://bigfrontend.dev/problem/lit-html-1-tagged-templates

function html(segments, ...values) {
  const N = segments.length;
  let idx = 0;
  let raw = '';
  for (let pos = 0; pos < N - 1; pos++, idx++) {
    raw += segments[pos] + values[idx];
  }
  raw += segments[N - 1];
  return raw;
}

// render the result from html() into the container
function render(result, container) {
  container.innerHTML = result;
}
