import Vue from 'vue';

export const isServer = Vue.prototype.$isServer;

export function isDef (value) {
  return value !== undefined && value !== null;
}

export function isObj (obj) {
  const type = typeof obj;
  return type === 'function' || type === 'object';
}
