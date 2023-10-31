class Asteroid {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.r = random(25, 40);
    this.size = this.r;
  }

  show() {
    fill(40);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  shrink() {
    this.size -= 0.05;
    this.r = this.size;
  }
}
