import { isServer } from './';

export function on(target, event, handler) {
  !isServer && target.addEventListener(event, handler);
}

export function off(target, event, handler) {
  !isServer && target.removeEventListener(event, handler);
}
