import Shapes from "./shapes.js";

class Canvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.style.background = "rgb(000, 000, 000)";
    this.context = this.canvas.getContext("2d");
    this.addResizeListener();
    this.addResizeListener();
    this.setCanvasSize();
  }

  setCanvasSize() {
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
  }

  addResizeListener() {
    window.addEventListener("resize", () => {
      this.setCanvasSize(this.canvas);
      this.draw();
    });
  }

  draw() {
    const shapes = new Shapes(this.context, 50);
    shapes.animate();
  }
}

export default Canvas;
