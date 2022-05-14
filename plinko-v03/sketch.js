//User Interface Radio Button
let radioSelection;
let oddRatio;
let oddratios = [-2, -1, 0, 1, 2, 3];

//Rename Matter.js names
let Engine = Matter.Engine;
let World = Matter.World;
let Runner = Matter.Runner;
let Bodies = Matter.Bodies;
let Events = Matter.Events;
let Constraint = Matter.Constraint;
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;
let Common = Matter.Common;

//Define this world specific variables
let engine;
//world is the world inside of an engine

let world;
let ground;
let boundaries = [];
let dividers = [];
let plinkos = [];
let polygons = [];
let cols = 10;
let draws = [];
let angles = [-0.2, 0.9, 1.5, 2.1, -0.9, -1.7, -2.4];
let clubs = [];
let referees = [];
//analysts
let teams = [];
let counter = 0;

//Declare element variables
let playerPosition;
let playerCard;
let playerHeight;
let playerWeight;
let playerScore;
let playerAge;
let playerName;
let playerVictory;

let clubCountry;
let clubName;

let refCountry;
let refName;
let refCard;

let float;
let floats = [];

//Declare element measurement
let pRadius = 40;
let pAngleStart = 0.8;

//Declare measurement variables
let startX;
let dWidth = 800;

let posStart = { x: -20, y: 40 };

let xArray = [-10, 0, 20, -20, 40];
let colors = ["orange", "blue", "green", "purple", "grey"];

let called = false;

function setup() {
  createCanvas(dWidth, dWidth, WEBGL);

  radio = createRadio();
  radio.option("1", "No Covariate Selected");
  radio.option("2", "Only Covariates Related to Players");
  radio.option("3", "Only Covariates Related to Leagues");
  radio.option("4", "Only Covariates Related to Referees");
  radio.option("5", "Covariates Related to Players and Leagues");
  radio.option("6", "Covariates Related to Players and Referees");
  radio.option("7", "Covariates Related to Players, Leagues, and Referees");
  radio.option("8", "Only Covariates Related to Draws");
  radio.style("width", "800px");
  radio.selected("2");
  textAlign(LEFT);

  radioSelection = createGraphics(500, 500);
  oddRatio = createGraphics(500, 500);

  // console.log(val);

  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  //create plinkos
  addPlinko();
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

  //*****************ODD RATIO PLANE */
  //draw oddRatio axis
  oddRatio.background("red");
  oddRatio.text("-2   -1   0    1   2   3", 240, 300);
  oddRatio.textSize(65);
  oddRatio.textAlign(CENTER);

  //draw bottom platform
  push();
  // ambientMaterial(255);
  // fill(50);
  noStroke();
  translate(0, height / 2 - 50);
  rotateX(HALF_PI);
  texture(oddRatio);
  plane(500, 500);
  pop();

  //player background
  push();
  // ambientMaterial(255);
  fill("#8a3324");
  noStroke();
  translate(0, -150, -100);
  rotateZ(0.1);
  plane(400, 300);
  pop();

  //club background
  push();
  // ambientMaterial(255);
  fill("#e0e0ff");
  noStroke();
  translate(0, 50, -50);
  // rotateX(HALF_PI);
  plane(250, 100);
  pop();

  //referee background
  push();
  // ambientMaterial(255);
  fill("#fbda98");
  noStroke();
  translate(20, 150, -75);
  rotateZ(-0.1);
  plane(320, 150);
  pop();

  // //draw all elements
  // // World.add(world, float.body);

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  for (let i = 0; i < dividers.length; i++) {
    dividers[i].show();
  }

  // for (let i = 0; i < plinkos.length; i++) {
  //   plinkos[i].show();
  //   // console.log(plinkos[i].body);
  // }

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  // for (let i = 0; i < draws.length; i++) {
  //   draws[i].show();
  // }

  // for (let i = 0; i < clubs.length; i++) {
  //   clubs[i].show();
  // }

  // for (let i = 0; i < referees.length; i++) {
  //   referees[i].show();
  // }

  let val = radio.value();
  if (val === "1") {
    if (frameCount % 60 == 0 && teams.length < 2) {
      //x, y, r, f, d, color
      team1();
      // console.log(linears);
    }

    for (let i = 0; i < plinkos.length; i++) {
      World.remove(world, plinkos[i].body);
      plinkos.splice(i, 1);
      i--;
    }

    for (let i = 0; i < clubs.length; i++) {
      World.remove(world, clubs[i].body);
      clubs.splice(i, 1);
      i--;
    }

    for (let i = 0; i < referees.length; i++) {
      World.remove(world, referees[i].body);
      referees.splice(i, 1);
      i--;
    }

    for (let i = 0; i < teams.length; i++) {
      teams[i].show();
      if (teams[i].isOffScreen()) {
        //remove the particle from the world as well
        World.remove(world, teams[i].body);
        teams.splice(i, 1);
        i--;
      }
    }
    // deleteClub();
    // radioSelection.background("white");
    // radioSelection.text(`item cost is ${val}`, width / 2, height / 2);
    // radioSelection.textSize(16);
    // radioSelection.textAlign(CENTER);
    // // console.log(val);
  }

  push();
  translate(20, 150, -150);
  if (val === "1") {
    radioSelection.background("white");
    radioSelection.text(`item cost is ${val}`, width / 2, height / 2);
    radioSelection.textSize(16);
    radioSelection.textAlign(CENTER);
    // console.log(val);
  }
  texture(radioSelection);
  plane(500, 500);
  pop();
}

function keyPressed() {
  World.remove(world, clubs[0].body);
  clubs.splice(0, 1);
}

function team1() {
  let teamA = new Particle(150, -height / 2 + 50, 10, 0.5, 1, "orange");
  teams.push(teamA);
  let teamB = new Particle(20, -height / 2 + 50, 10, 0.5, 1, "blue");
  teams.push(teamB);
  let teamC = new Particle(20, -height / 2 + 50, 10, 0.5, 1, "blue");
  teams.push(teamC);
}
