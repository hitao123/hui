export default {
  id: 1,
  zIndex: 2000,
  stack: [],
  lockCount: 1,
  plusKey(key) {
    return this[key]++;
  },
  get top() {
    return this.stack[this.stack.length - 1];
  }
}
