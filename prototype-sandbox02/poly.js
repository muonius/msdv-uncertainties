function drawPolygon(x, y, r, sides) {
  let angle = TWO_PI / sides;
  beginShape();
  for (let a = -0.5; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * r;
    let sy = y + sin(a) * r;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function Poly(x, y, sides, r, c) {
  const options = {
    friction: 0.5,
    restitution: 1,
    isStatic: true,
    circleRadius: 10,
  };
  this.body = Bodies.polygon(x, y, sides, r, options);
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
    strokeWeight(1);
    noStroke();
    fill(c);
    drawPolygon(0, 0, this.r, this.sides);
    pop();
    console.log(this.body);
  };
}
