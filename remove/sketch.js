//https://www.youtube.com/watch?v=EyG_2AdHlzY
let bubbles = [];
function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
    bubbles[i] = new Bubble();
  }
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function keyPressed() {
  bubbles.splice(0, 1);
  //remove element in the order they were added;
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.display = function () {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  };
  this.move = function () {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  };
}
