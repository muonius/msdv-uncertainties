let Engine = Matter.Engine;
let World = Matter.World;
let Runner = Matter.Runner;
let Bodies = Matter.Bodies;
let Events = Matter.Events;
let Constraint = Matter.Constraint;
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;
let Common = Matter.Common;

let engine;
//world is the world inside of an engine
let world;
let boxes = [];
let ground;
let boundaries = [];
let circles = [];

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  boundaries.push(new Boundary(150, 200, width * 0.4, 20, 0.4, "brown"));
  boundaries.push(new Boundary(250, 400, width * 0.6, 80, -0.3, "black"));
  boundaries.push(new Boundary(350, 300, width * 0.8, 2, -1.2, "black"));
  Runner.run(engine);
  frameRate(60);
}

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(10, 30), random(20, 50)));
  circles.push(new Circles(mouseX, mouseY, random(10, 30)));
}

function draw() {
  background("FloralWhite");
  fill(255);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  for (let j = 0; j < boundaries.length; j++) {
    boundaries[j].show();
  }
  for (let k = 0; k < circles.length; k++) {
    circles[k].show();
  }
}
