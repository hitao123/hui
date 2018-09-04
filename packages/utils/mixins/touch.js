export default {
  methods: {
    touchStart(event) {
      this.startX = event.touchs[0].clientX;
      this.startY = event.touchs[1].clientY;
    },
    touchMove(event) {
      const touchs = event.touchs[0];
      this.deltaX = touchs.clientX - this.startX;
      this.deltaY = touchs.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.offsetX > this.offsetY ? 'horizontal' : (this.offsetX < this.offsetY ? 'vertical' : '');
    },
    resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
}
