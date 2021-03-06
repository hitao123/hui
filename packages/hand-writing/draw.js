function Draw(canvas, config = {}) {
  if (!(this instanceof Draw)) {
    return new Draw(canvas, config);
  }
  if (!canvas) {
    return;
  }
  let { width, height } = window.getComputedStyle(canvas, null);
  width = config.width || width;
  height = config.height || height;
  width = typeof width === 'number' ? width : width.replace('px', '');
  height = typeof height === 'number' ? height : height.replace('px', '');

  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.width = width;
  this.height = height;

  canvas.width = width;
  canvas.height = height;

  const ctx = this.ctx;

  ctx.lineWidth = 4; // 线条粗细
  ctx.strokeStyle = 'black'; // 填充颜色
  ctx.lineCap = 'round'; // 线条
  ctx.lineJoin = 'round'; // 线条连接处圆形

  Object.assign(ctx, config);

  const isMobile = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent);

  const { left, top } = canvas.getBoundingClientRect(); // 距离窗口左和上的距离
  const point = {};
  let pressed = false;

  // pc 端
  if (!isMobile) {
    ctx.shadowBlur = 1; // 线条两边模糊 消除锯齿
    ctx.shadowColor = 'black'; // 线条模糊颜色
  }

  const paint = (signal) => {
    switch (signal) {
      case 1:
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        break;
      case 2:
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
        break;
      default:
    }
  };

  const create = signal => (e) => {
    e.preventDefault();
    if (signal === 1) {
      pressed = true;
    }
    if (signal === 1 || pressed) {
      e = isMobile ? e.touches[0] : e;
      point.x = e.clientX - left;
      point.y = e.clientY - top;
      paint(signal);
    }
  };
  const start = create(1);
  const move = create(2);

  const requestAnimationFrame = window.requestAnimationFrame;
  const optimizedMove = requestAnimationFrame ? (e) => {
    requestAnimationFrame(() => {
      move(e);
    });
  } : move;

  if (isMobile) {
    canvas.addEventListener('touchstart', start);
    canvas.addEventListener('touchmove', optimizedMove);
  } else {
    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', optimizedMove);
    ['mouseup', 'mouseleave'].forEach((event) => {
      canvas.addEventListener(event, () => {
        pressed = false;
      });
    });
  }
}

/**
 * 获取 PNG Image
 */
Draw.prototype.getPNGImage = function(canvas = this.canvas) {
  return canvas.toDataURL('image/png');
}
/**
 * 获取 JPG Image
 */
Draw.prototype.getJPGImage = function(canvas = this.canvas, rate = 0.5) {
  return canvas.toDataURL('image/jpeg', rate);
}
/**
 * 下载 PNG Image
 */
Draw.prototype.downloadPNGImage = function(image) {
  const url = image.replace('image/png', 'image/octet-stream;Content-Disposition:attachment;filename=test.png');
  window.location.href = url;
}
/**
 * 旋转画布
 */
Draw.prototype.rotate = function(degree, image = this.canvas) {
  degree = ~~degree;
  if (degree !== 0) {
    const maxDegree = 180;
    const minDegree = -90;
    if (degree > maxDegree) {
      degree = maxDegree;
    } else if (degree < minDegree) {
      degree = minDegree;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const height = image.height;
    const width = image.width;
    const degreePI = (degree * Math.PI) / 180;

    switch (degree) {
      // 逆时针旋转90°
      case -90:
        canvas.width = height;
        canvas.height = width;
        ctx.rotate(degreePI);
        ctx.drawImage(image, -width, 0);
        break;
      // 顺时针旋转90°
      case 90:
        canvas.width = height;
        canvas.height = width;
        ctx.rotate(degreePI);
        ctx.drawImage(image, 0, -height);
        break;
      // 顺时针旋转180°
      case 180:
        canvas.width = width;
        canvas.height = height;
        ctx.rotate(degreePI);
        ctx.drawImage(image, -width, -height);
        break;
      default:
    }
    image = canvas;
  }
  return image;
}
/**
 * 画图
 */
Draw.prototype.drawImage = function(src) {
  const img = new Image();
  img.src = src;
  img.onload = function() {
    console.log(img, this)
    // 铺底色
    this.ctx.fillStyle = '#fff';
    this.ctx.drawImage(img, 0, 0, this.width, this.height);
  }.bind(this);
}
/**
 * 清除画布
 */
Draw.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
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
