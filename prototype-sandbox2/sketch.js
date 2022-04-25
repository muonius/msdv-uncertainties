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
let dividers = [];
let plinkos = [];
let circles = [];
let particles = [];
let polygons = [];
let cols = 10;
let draws = [];
let angles = [-0.2, 0.9, 1.5, 2.1, -0.9, -1.7, -2.4];
let clubs = [];
let referees = [];

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  polygons.push(new Poly(width / 2, 300, 7, 60, "brown"));

  //draw Player plinkos
  for (let i = 0; i < angles.length; i++) {
    let bx = width / 2 + sin(angles[i]) * 100;
    let by = 300 + cos(angles[i]) * 100;
    plinkos.push(
      new Boundary(
        bx,
        by,
        random(20, 30),
        random(5, 20),
        TWO_PI - angles[i],
        "black"
      )
    );
  }

  //draw club plinkos
  clubs.push(new Boundary(250, 500, 60, 5, 0.9, "black"));
  clubs.push(new Boundary(300, 500, 80, 10, 1, "black"));

  //draw referees plinkos
  referees.push(new Boundary(500, 500, 40, 15, -0.9, "black"));
  referees.push(new Boundary(550, 500, 80, 5, -1.1, "black"));
  referees.push(new Boundary(600, 500, 100, 10, -1.2, "black"));
  //covariate - number of draws
  draws.push(new Boundary(width / 2 - 30, 80, 20, 20, 0, "black"));

  //create divider
  for (let i = 0; i < cols + 1; i++) {
    const spacing = width / cols;
    let x = i * spacing;
    let h = 100;
    let w = 10;
    let y = height - h / 2;
    let bBottom = new Boundary(x, y, w, h, 0, "orange");
    dividers.push(bBottom);
  }

  //create outer bound
  let bound = new Boundary(width / 2, height, width, 100, 0, "black");
  boundaries.push(bound);

  Runner.run(engine);
  frameRate(60);
}

function draw() {
  background("FloralWhite");

  if (frameCount % 120 == 0 && particles.length <= 29) {
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
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  for (let i = 0; i < polygons.length; i++) {
    polygons[i].show();
  }
  for (let i = 0; i < dividers.length; i++) {
    dividers[i].show();
  }

  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
    console.log(plinkos[i].body);
  }

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  for (let i = 0; i < draws.length; i++) {
    draws[i].show();
  }

  for (let i = 0; i < clubs.length; i++) {
    clubs[i].show();
  }

  for (let i = 0; i < referees.length; i++) {
    referees[i].show();
  }
}

function newParticle() {
  let p = new Particle(width / 2, 0, 10);
  particles.push(p);
}
