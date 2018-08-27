import Shape from "./shape.js";

class Shapes {
  constructor(context, amount) {
    this.context = context;
    this.amount = amount;
    this.shapes = [];
    this.generate();
    this.animate = this.animate.bind(this);
  }

  generate() {
    for (let i = 0; i <= this.amount; i++) {
      const shape = new Shape(this.context);

      this.shapes.push(shape);
    }
  }

  animate() {
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].draw();
    }

    requestAnimationFrame(this.animate);
  }
}

export default Shapes;
