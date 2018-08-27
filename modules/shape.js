class Shape {
  constructor(context, x, y, length) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.length = length;
    this.swatch = [
      [194, 87, 123],
      [130, 112, 142],
      [96, 213, 218],
      [232, 172, 184]
    ];
    this.swatchKey = this.generateSwatchKey();
    this.rgb = this.getRgb();
  }

  generateSwatchKey() {
    return Math.floor(Math.random() * this.swatch.length);
  }

  getRgb() {
    return this.swatch[this.swatchKey];
  }

  getFillStyle() {
    const [r, g, b] = this.rgb;
    return `rgba(${r}, ${g}, ${b})`;
  }

  getNextSwatchKey() {
    const lastSwatchKey = this.swatch.length - 1;
    return this.swatchKey === lastSwatchKey ? 0 : this.swatchKey + 1;
  }

  incrementSwatchKey() {
    this.swatchKey = this.getNextSwatchKey();
  }

  getNextRgb() {
    return this.swatch[this.getNextSwatchKey()];
  }

  getNextColorValue(now, next) {
    if (now < next) {
      return (now += 1);
    } else if (now > next) {
      return (now -= 1);
    }
    return now;
  }

  draw() {
    this.update();
    this.context.beginPath();
    this.context.fillStyle = this.getFillStyle();
    this.context.rect(this.x, this.y, this.length, this.length);
    this.context.fill();
  }

  match() {
    const nextRgb = this.getNextRgb();
    const [r, g, b] = this.rgb;
    const [nextR, nextG, nextB] = nextRgb;
    const rMatch = r === nextR;
    const gMatch = g === nextG;
    const bMatch = b === nextB;
    return rMatch && gMatch && bMatch;
  }

  update() {
    const nextRgb = this.getNextRgb();

    if (this.match()) {
      this.incrementSwatchKey();
    }

    for (let i = 0; i < this.rgb.length; i++) {
      this.rgb[i] = this.getNextColorValue(this.rgb[i], nextRgb[i]);
    }
  }
}

export default Shape;
