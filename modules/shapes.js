import Shape from "./shape.js";

class Shapes {
  constructor(context, squareLength) {
    this.context = context;
    this.squareLength = squareLength;
    this.shapes = [];
    this.columns = this.calculateColumns();
    this.rows = this.calculateRows();

    this.generate();

    this.animate = this.animate.bind(this);
  }

  calculateRows() {
    return Math.floor(window.innerHeight / this.squareLength);
  }

  calculateColumns() {
    return Math.floor(window.innerWidth / this.squareLength);
  }

  generate() {
    let y = 0;
    for (let i = 0; i <= this.rows; i++) {
      this.generateColumns(y);
      y += this.squareLength;
    }
  }

  generateColumns(y) {
    let x = 0;
    for (let i = 0; i <= this.columns; i++) {
      const shape = new Shape(this.context, x, y, this.squareLength);
      this.shapes.push(shape);
      x += this.squareLength;
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
