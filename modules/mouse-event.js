class Mouse {
  constructor() {
    this.addEventListener();
    this.x;
    this.y;
  }

  addEventListener() {
    window.addEventListener("mousemove", event => {
      const { x, y } = event;
      this.x = x;
      this.y = y;
    });
  }
}

export default new Mouse();
