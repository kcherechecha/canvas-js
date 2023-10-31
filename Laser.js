class Laser {
  constructor(pos, heading) {
    this.pos = createVector(pos.x, pos.y);
    this.vel = p5.Vector.fromAngle(heading);
    this.vel.mult(6);
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  }

  offscreen() {
    return (
      this.pos.x > width ||
      this.pos.x < 0 ||
      this.pos.y > height ||
      this.pos.y < 0
    );
  }
}
