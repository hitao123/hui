import Vue from 'vue';

export const isServer = Vue.prototype.$isServer;

export function isDef (value) {
  return value !== undefined && value !== null;
}

export function isObj (obj) {
  const type = typeof obj;
  return obj !== null && (type === 'function' || type === 'object');
}

export function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
