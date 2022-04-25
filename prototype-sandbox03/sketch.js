let Engine = Matter.Engine;
let World = Matter.World;
let Runner = Matter.Runner;
let Bodies = Matter.Bodies;
let Events = Matter.Events;
let Constraint = Matter.Constraint;
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;
let Common = Matter.Common;

let startX;
let dWidth = 800;

let engine;
//world is the world inside of an engine
let world;
let boxes = [];
let ground;
let boundaries = [];
let dividers = [];
let plinkos = [];
let circles = [];
let polygons = [];
let cols = 10;
let draws = [];
let angles = [-0.2, 0.9, 1.5, 2.1, -0.9, -1.7, -2.4];
let clubs = [];
let referees = [];
//analysts
let logistics = [];
let linears = [];
let poissons = [];
let miscs = [];

function setup() {
  createCanvas(dWidth, dWidth);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;

  //polygons
  polygons.push(new Poly(width / 2 - 50, 300, 7, 60, "brown"));

  //draw Player plinkos
  for (let i = 0; i < angles.length; i++) {
    let bx = width / 2 + sin(angles[i]) * 140;
    let by = 300 + cos(angles[i]) * 140;
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
  draws.push(new Boundary(width / 2 - 30, 80, 30, 40, -0.1, "black"));

  //create divider
  for (let i = 0; i < cols + 1; i++) {
    const spacing = width / cols;
    let x = i * spacing;
    let h = 100;
    let w = 5;
    let y = height - h / 2;
    let bBottom = new Boundary(x, y, w, h, 0, "black");
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

  if (frameCount % 120 == 0 && logistics.length <= 15) {
    newLogistic();
  }

  if (frameCount % 240 == 20 && linears.length <= 6) {
    newLinear();
  }

  if (frameCount % 360 == 30 && linears.length <= 6) {
    newPoisson();
  }

  if (frameCount % 480 == 40 && linears.length <= 2) {
    newMisc();
  }

  for (let i = 0; i < logistics.length; i++) {
    logistics[i].show();
    if (logistics[i].isOffScreen()) {
      //remove the particle from the world as well
      World.remove(world, logistics[i].body);
      logistics.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < linears.length; i++) {
    linears[i].show();
    if (linears[i].isOffScreen()) {
      //remove the particle from the world as well
      World.remove(world, linears[i].body);
      linears.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < poissons.length; i++) {
    poissons[i].show();
    if (poissons[i].isOffScreen()) {
      //remove the particle from the world as well
      World.remove(world, poissons[i].body);
      poissons.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < miscs.length; i++) {
    miscs[i].show();
    if (miscs[i].isOffScreen()) {
      //remove the particle from the world as well
      World.remove(world, miscs[i].body);
      miscs.splice(i, 1);
      i--;
    }
  }
  // fill(255);

  //draw all elements

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

function newLogistic() {
  if (random() > 0.5) {
    startX = width / 2 - 5;
  } else {
    startX = width / 2 + 15;
  }
  //(x, y, r, f, d, blue)
  let lg = new Particle(startX, 0, 10, 0, 0.01, 210);
  logistics.push(lg);
}

function newLinear() {
  if (random() > 0.5) {
    startX = width / 2 - 5;
  } else {
    startX = width / 2 + 15;
  }
  //(x, y, r, f, d, red)
  let ln = new Particle(startX, 0, 10, 0, 0.01, 30);
  linears.push(ln);
}

function newPoisson() {
  if (random() > 0.5) {
    startX = width / 2 - 5;
  } else {
    startX = width / 2 + 15;
  }
  //(x, y, r, f, d, green)
  let pn = new Particle(startX, 0, 10, 0, 0.02, 90);
  poissons.push(pn);
}

function newMisc() {
  if (random() > 0.5) {
    startX = width / 2 - 5;
  } else {
    startX = width / 2 + 15;
  }
  //(x, y, r, f, d, green)
  let ms = new Particle(startX, 0, 10, 0, 0.02, 330);
  miscs.push(ms);
}
