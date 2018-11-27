import Vue from 'vue';
import { PopupMixin } from './mixins/popup';

export interface Toast {
  clear(): void;
  install(): void;
}
