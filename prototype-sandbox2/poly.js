function Poly(x, y, sides, r, a, c) {
  const options = {
    friction: 1,
    restitution: 1,
    isStatic: true,
    angle: a,
  };
  this.body = Bodies.polygon(x, y, sides, r, a, options);
  // this.body.angle = PI / 4;

  this.sides = sides;
  this.r = r;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rotate(angle);
    strokeWeight(4);
    noStroke();
    fill(c);
    polygon(0, 0, this.r, this.sides);
    pop();
    console.log(this.body.isStatic);
  };
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
