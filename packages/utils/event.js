import { isServer } from './';

export function on(target, event, handler) {
  !isServer && target.addEventListener(event, handler);
}

export function off(target, event, handler) {
  !isServer && target.removeEventListener(event, handler);
}

export function stopPropagation(event) {
  event.stopPropagation();
}

export function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}
