class Shape {
  constructor(context) {
    this.context = context;
  }

  draw() {
    this.update();
  }

  update() {}
}

export default Shape;
