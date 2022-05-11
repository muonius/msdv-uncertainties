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

let xArray = [-10, 0, 20, -20, 40];
let colors = ["orange", "blue", "green", "purple", "grey"];

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
let test = [];

function setup() {
  createCanvas(dWidth, dWidth, WEBGL);
  // colorMode(HSB);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  //draw Player plinkos
  let playerPosition = new Plinko(-20, -height / 2 + 200, 40, 40, 0.8, "brown");
  plinkos.push(playerPosition);

  let playerCard = new Plinko(70, -height / 2 + 200, 40, 40, 0.8, "brown");
  plinkos.push(playerCard);

  let playerHeight = new Plinko(-70, -height / 2 + 280, 40, 40, 0.8, "brown");
  plinkos.push(playerHeight);

  let playerWeight = new Plinko(20, -height / 2 + 280, 40, 40, 0.8, "brown");
  plinkos.push(playerWeight);

  let playerScore = new Plinko(120, -height / 2 + 280, 40, 40, 0.8, "brown");
  plinkos.push(playerScore);

  let playerAge = new Plinko(-70, -height / 2 + 360, 40, 40, 0.8, "brown");
  plinkos.push(playerAge);

  let playerName = new Plinko(20, -height / 2 + 360, 40, 40, 0.8, "brown");
  plinkos.push(playerName);

  let playerVictory = new Plinko(120, -height / 2 + 360, 40, 40, 0.8, "brown");
  plinkos.push(playerVictory);

  // console.log(plinkos);

  //polygons
  // polygons.push(new Poly(0, 50, 7, 40, "brown"));

  //test

  //draw club plinkos
  clubs.push(new Plinko(-20, -height / 2 + 440, 40, 40, 0.8, "#ccccff"));
  clubs.push(new Plinko(70, -height / 2 + 440, 40, 40, 0.8, "#ccccff"));

  //draw referees plinkos
  referees.push(new Plinko(-70, -height / 2 + 520, 40, 40, 0.8, "#ffcc66"));
  referees.push(new Plinko(20, -height / 2 + 520, 40, 40, 0.8, "#ffcc66"));
  referees.push(new Plinko(120, -height / 2 + 520, 40, 40, 0.8, "#ffcc66"));

  //covariate - number of draws
  // draws.push(new Boundary(width / 2 - 10, 80, 30, 40, -0.1, "black"));

  //create divider
  for (let i = -cols / 2; i < cols + 1; i++) {
    const spacing = width / cols;
    let x = i * spacing;
    let h = 80;
    let w = 4;
    let y = height / 2 - h;
    let bBottom = new Boundary(x, y, w, h, 0, "Black");
    dividers.push(bBottom);
  }

  //create outer bound
  let bound = new Boundary(0, height / 2, width, 100, 0, "black");
  boundaries.push(bound);

  Runner.run(engine);
  frameRate(60);
}

function draw() {
  orbitControl();
  lights();
  background(255);

  push();
  ambientMaterial(255);
  fill(50);
  noStroke();
  translate(0, height / 2 - 50);
  rotateX(HALF_PI);
  plane(500, 500);
  pop();

  push();
  // ambientMaterial(255);
  fill("#8a3324");
  noStroke();
  translate(0, -150, -100);
  rotateZ(0.1);
  plane(400, 300);
  pop();

  push();
  // ambientMaterial(255);
  fill("#e0e0ff");
  noStroke();
  translate(0, 50, -50);
  // rotateX(HALF_PI);
  plane(250, 100);
  pop();

  push();
  // ambientMaterial(255);
  fill("#fbda98");
  noStroke();
  translate(20, 150, -75);
  rotateZ(-0.1);
  plane(320, 150);
  pop();

  // if (frameCount % 120 == 0 && logistics.length <= 15) {
  //   newLogistic();
  // }

  if (frameCount % 240 == 20) {
    for (let i = 0; i < 5; i++)
      //x, y, r, f, d, color
      newLinear(xArray[i], -height / 2 + 50, 10, 0.5, 1, colors[i]);
    // console.log(linears);
  }

  // if (frameCount % 360 == 30 && linears.length <= 6) {
  //   newPoisson();
  // }

  // if (frameCount % 480 == 40 && linears.length <= 2) {
  //   newMisc();
  // }

  // for (let i = 0; i < logistics.length; i++) {
  //   logistics[i].show();
  //   if (logistics[i].isOffScreen()) {
  //     //remove the particle from the world as well
  //     World.remove(world, logistics[i].body);
  //     logistics.splice(i, 1);
  //     i--;
  //   }
  // }

  for (let i = 0; i < linears.length; i++) {
    linears[i].show();
    if (linears[i].isOffScreen()) {
      //remove the particle from the world as well
      World.remove(world, linears[i].body);
      linears.splice(i, 1);
      i--;
    }
  }

  // for (let i = 0; i < poissons.length; i++) {
  //   poissons[i].show();
  //   if (poissons[i].isOffScreen()) {
  //     //remove the particle from the world as well
  //     World.remove(world, poissons[i].body);
  //     poissons.splice(i, 1);
  //     i--;
  //   }
  // }

  // for (let i = 0; i < miscs.length; i++) {
  //   miscs[i].show();
  //   if (miscs[i].isOffScreen()) {
  //     //remove the particle from the world as well
  //     World.remove(world, miscs[i].body);
  //     miscs.splice(i, 1);
  //     i--;
  //   }
  // }
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

  for (let i = 0; i < dividers.length; i++) {
    dividers[i].show();
  }

  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
    // console.log(plinkos[i].body);
  }

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  for (let i = 0; i < draws.length; i++) {
    draws[i].show();
  }

  for (let i = 0; i < polygons.length; i++) {
    polygons[i].show();
  }

  for (let i = 0; i < clubs.length; i++) {
    clubs[i].show();
  }

  for (let i = 0; i < referees.length; i++) {
    referees[i].show();
  }

  for (let i = 0; i < test.length; i++) {
    test[i].show();
  }

  // push();
  // translate(-50, 100, -50);
  // noStroke();
  // fill("#ffcc66");
  // box(45, 45, 20);
  // pop();

  // push();
  // translate(80, 100, -50);
  // noStroke();
  // fill("#ffcc66");
  // box(45, 45, 20);
  // pop();
}

// function newLogistic() {
//   if (random() > 0.5) {
//     startX = -5;
//   } else {
//     startX = 15;
//   }
//   //(x, y, r, f, d, blue)
//   let lg = new Particle(startX, -height / 2, 10, 0, 0.01, "red");
//   logistics.push(lg);
// }

function newLinear(startX, startY, r, f, d, color) {
  //x, y, r, f, d, color
  let ln = new Particle(startX, startY, r, f, d, color);
  linears.push(ln);
}

// function newPoisson() {
//   if (random() > 0.5) {
//     startX = -5;
//   } else {
//     startX = 15;
//   }
//   //(x, y, r, f, d, green)
//   let pn = new Particle(startX, -height / 2, 10, 0, 0.02, "orange");
//   poissons.push(pn);
// }

// function newMisc() {
//   if (random() > 0.5) {
//     startX = -5;
//   } else {
//     startX = 15;
//   }
//   //(x, y, r, f, d, green)
//   let ms = new Particle(startX, -height / 2, 10, 0, 0.02, "green");
//   miscs.push(ms);
// }
