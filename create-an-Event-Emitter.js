// https://bigfrontend.dev/problem/create-an-Event-Emitter

// This is a very popular JS question, I got asked in multiple interviews
// TC: O(N) | Space: O(N)
class EventEmitter {
  constructor() {
    this.eventBus = new Map();
  }
  subscribe(eventName, callback) {
    const callbackList = this.eventBus.has(eventName)
      ? this.eventBus.get(eventName)
      : [];
    callbackList.push(callback);
    this.eventBus.set(eventName, callbackList);
    return {
      release: () => {
        const pos = callbackList.indexOf(callback);
        callbackList.splice(pos, 1);
        this.eventBus.set(eventName, callbackList);
      },
    };
  }

  emit(eventName, ...args) {
    const callbacks = this.eventBus.get(eventName);
    callbacks.forEach((c) => c(...args));
  }
}
