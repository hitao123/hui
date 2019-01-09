import Vue from 'vue';
import VueImagePreview from './image-preview';

let instance;

const initInstance = () => {
  instance = new (Vue.extend(VueImagePreview))({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)
}

const ImagePreview = (images) => {
  if (!instance) {
    initInstance();
  }
  console.log(instance, images);
  instance.images = images;
  instance.value = true;
  return instance
}

ImagePreview.install = () => {
  Vue.use(VueImagePreview);
};

export default ImagePreview;
