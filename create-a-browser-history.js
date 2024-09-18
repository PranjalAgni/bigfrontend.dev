// https://bigfrontend.dev/problem/create-a-browser-history

// Took some time to solve this one, but decent problem
class BrowserHistory {
  /**
   * @type {string[]}
   */ history = [];
  /**
   * @type {number}
   */
  pos = -1;
  initial = undefined;
  /**
   * @param {string} url
   * if url is set, it means new tab with url
   * otherwise, it is empty new tab
   */

  constructor(url) {
    this.history = [];
    this.pos = -1;
    if (url) {
      this.initial = url;
      // this.history.push(url);
    }
  }
  /**
   * @param { string } url
   */
  visit(url) {
    this.history.splice(this.pos + 1);
    this.history.push(url);
    this.pos += 1;
  }
  /**
   * @return {string} current url
   */
  get current() {
    if (this.pos === -1) return this.initial;
    return this.history[this.pos];
  }

  // go to previous entry
  goBack() {
    this.pos = Math.max(-1, this.pos - 1);
  }

  // go to next visited url
  forward() {
    this.pos = Math.min(this.history.length - 1, this.pos + 1);
  }
}
