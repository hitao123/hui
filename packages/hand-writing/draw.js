function Draw(canvas, config = {}) {
  if (!(this instanceof Draw)) {
    return new Draw(canvas, config);
  }
  if (!canvas) {
    // return;
  }
  let { width, height } = window.getComputedStyle(canvas, null);
  console.log(window.getComputedStyle(canvas, null), width, height)
  width = width.replace('px', '');
  height = height.replace('px', '');

  this.canvas = canvas;
  this.context = canvas.getContext('2d');
  this.width = width;
  this.height = height;

  canvas.width = width;
  canvas.height = height;
}

/**
 * 获取 PNG Image
 */
Draw.prototype.getPNGImage = function() {
  //
}
/**
 * 获取 JPG Image
 */
Draw.prototype.getJPGImage = function() {

}
/**
 * 下载 PNG Image
 */
Draw.prototype.downloadPNGImage = function(image) {
  const url = image.replace('image/png', 'image/octet-stream;Content-Disposition:attachment;filename=test.png');
  window.location.href = url;
}

/**
 * 画图
 */
Draw.prototype.drawImage = function() {
  //
}
/**
 * 清除画布
 */
Draw.prototype.clear = function() {
  //
}

/**
 * dataurl 转 blob 对象
 */
Draw.prototype.dataURLtoBlob = function(dataURL) {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bStr = atob(arr[1]);
  let n = bStr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bStr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

export default Draw;
