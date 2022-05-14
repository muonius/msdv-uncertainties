//User Interface Radio Button
let radioSelection;
let oddRatio;
let oddratios = [-2, -1, 0, 1, 2, 3];
let val;

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
  radio.option("1", "Covariates Related to Players, Leagues, and Referees");
  radio.option("2", "Only Covariates Related to Players");
  radio.option("3", "Only Covariates Related to Leagues");
  radio.option("4", "Only Covariates Related to Referees");
  radio.option("5", "Covariates Related to Players and Leagues");
  radio.option("6", "Covariates Related to Players and Referees");
  radio.option("7", "Only Covariates Related to Draws");
  radio.option("8", "No Covariate Related to Players");
  radio.style("width", "800px");
  // radio.selected("2");
  textAlign(LEFT);

  radioSelection = createGraphics(500, 500);
  oddRatio = createGraphics(500, 500);

  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  //create plinkos
  addAll();

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
  frameRate(120);
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

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
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

  // for (let i = 0; i < draws.length; i++) {
  //   draws[i].show();
  // }

  // for (let i = 0; i < referees.length; i++) {
  //   referees[i].show();
  // }
  val = radio.value();
  setScene(val);
  //draw Tooltip
  push();
  translate(20, 150, -150);

  if (val) {
    radioSelection.background("white");
    radioSelection.text(`item cost is ${val}`, width / 2, height / 2);
    radioSelection.textSize(16);
    radioSelection.textAlign(CENTER);
    texture(radioSelection);
  }
  plane(500, 500);
  pop();
}

// **************HELPER FUNCTIONS

function keyPressed() {
  World.remove(world, clubs[0].body);
  clubs.splice(0, 1);
}

function onlyReferees() {
  let teamK = new Particle(200, -height / 2 + 50, 10, 0.5, 1, "brown");
  teams.push(teamK);
  let teamL = new Particle(-10, -height / 2 + 50, 10, 0.1, 0.1, "brown");
  teams.push(teamL);
}

function onlyClubs() {
  let teamF = new Particle(0, -height / 2 + 50, 10, 0.5, 1, "pink");
  teams.push(teamF);
  let teamG = new Particle(20, -height / 2 + 50, 10, 0.1, 0.1, "pink");
  teams.push(teamG);
}
function onlyPlayers() {
  let teamD = new Particle(100, -height / 2 + 50, 10, 0.1, 0.5, "purple");
  teams.push(teamD);
  let teamE = new Particle(150, -height / 2 + 50, 10, 0.1, 0.5, "purple");
  teams.push(teamE);
  let teamF = new Particle(40, -height / 2 + 50, 10, 0.1, 0.5, "purple");
  teams.push(teamF);
  let teamG = new Particle(-20, -height / 2 + 50, 10, 0.1, 0.5, "purple");
  teams.push(teamG);
}

function noCovariates() {
  let teamA = new Particle(150, -height / 2 + 50, 10, 0.5, 1, "orange");
  teams.push(teamA);
  let teamB = new Particle(170, -height / 2 + 50, 10, 0.5, 1, "blue");
  teams.push(teamB);
  let teamC = new Particle(20, -height / 2 + 50, 10, 0.5, 1, "blue");
  teams.push(teamC);
}

function threeCovariates() {
  let teamH = new Particle(150, -height / 2 + 50, 10, 0.5, 1, "green");
  teams.push(teamH);
  let teamI = new Particle(170, -height / 2 + 50, 10, 0.5, 1, "green");
  teams.push(teamI);
  let teamJ = new Particle(20, -height / 2 + 50, 10, 0.5, 1, "green");
  teams.push(teamJ);
}

function setScene(val) {
  if (val === "1") {
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }

    for (let i = 0; i < clubs.length; i++) {
      clubs[i].show();
    }

    for (let i = 0; i < referees.length; i++) {
      referees[i].show();
    }

    if (frameCount % 180 === 0 && teams.length < 3) {
      threeCovariates();
    }
  }

  if (val === "2") {
    removeReferees();
    removeClubs();
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }
    if (frameCount % 60 == 0 && teams.length < 7) {
      onlyPlayers();
    }
  }

  if (val === "3") {
    removePlayers();
    addClubs();
    for (let i = 0; i < clubs.length; i++) {
      clubs[i].show();
    }
    if (teams.length < 8) {
      onlyClubs();
    }
  }

  if (val === "4") {
    removeClubs();
    addReferees();
    for (let i = 0; i < referees.length; i++) {
      referees[i].show();
    }
    if (teams.length < 12) {
      onlyReferees();
    }
  }
}
