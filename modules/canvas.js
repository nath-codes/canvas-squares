import Shapes from "./shapes.js";

class Canvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.style.background = "rgb(000, 000, 000)";
    this.context = this.canvas.getContext("2d");
    this.addEventListener();
    this.setCanvasSize();
  }

  setCanvasSize() {
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
  }

  addEventListener() {
    window.addEventListener("resize", () => {
      this.setCanvasSize(this.canvas);
      this.draw();
    });
  }

  draw() {
    const shapes = new Shapes(this.context, 10);
    shapes.animate();
  }
}

export default Canvas;
