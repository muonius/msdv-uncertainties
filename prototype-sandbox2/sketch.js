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
let particles = [];
let polygons = [];

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  polygons.push(new Poly(width / 2, 200, 7, 60, "brown"));

  let angle = TWO_PI / 7;

  for (let a = -0.7; a < TWO_PI; a += angle) {
    let bx = width / 2 + sin(a) * 100;
    let by = 200 + cos(a) * 100;
    boundaries.push(new Boundary(bx, by, 30, 10, TWO_PI - a, "black"));
  }

  Runner.run(engine);
  frameRate(60);
}

function draw() {
  background("FloralWhite");

  if (frameCount % 60 == 0 && particles.length <= 29) {
    newParticle();
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    if (particles[i].isOffScreen()) {
      //remove the particle from the world as well
      World.remove(world, particles[i].body);
      particles.splice(i, 1);
      i--;
    }
  }

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
  for (let i = 0; i < polygons.length; i++) {
    polygons[i].show();
  }
  // noLoop();
}

function newParticle() {
  let p = new Particle(width / 2, 0, 10);
  particles.push(p);
}
