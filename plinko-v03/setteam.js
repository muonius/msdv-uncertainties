function onlyReferees() {
  let teamK = new Particle(200, -height / 2 + 50, 10, 0.5, 1, "brown", 0.5);
  teams.push(teamK);
  let teamL = new Particle(-10, -height / 2 + 50, 10, 0.1, 0.1, "brown", 0.5);
  teams.push(teamL);
}

function onlyClubs() {
  let teamF = new Particle(0, -height / 2 + 50, 10, 0.5, 1, "pink", 0.5);
  teams.push(teamF);
  let teamG = new Particle(20, -height / 2 + 50, 10, 0.1, 0.1, "pink", 0.5);
  teams.push(teamG);
}
function onlyPlayers() {
  let teamD = new Particle(100, -height / 2 + 50, 10, 0.1, 0.5, "purple", 0.5);
  teams.push(teamD);
  let teamE = new Particle(150, -height / 2 + 50, 10, 0.1, 0.5, "purple", 0.5);
  teams.push(teamE);
  let teamF = new Particle(40, -height / 2 + 50, 10, 0.1, 0.5, "purple", 0.5);
  teams.push(teamF);
  let teamG = new Particle(-20, -height / 2 + 50, 10, 0.1, 0.5, "purple", 0.5);
  teams.push(teamG);
}

function noCovariates() {
  let teamA = new Particle(150, -height / 2 + 50, 10, 0.5, 1, "orange", 0.5);
  teams.push(teamA);
  let teamB = new Particle(170, -height / 2 + 50, 10, 0.5, 1, "blue", 0.5);
  teams.push(teamB);
  let teamC = new Particle(20, -height / 2 + 50, 10, 0.5, 1, "blue", 0.5);
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
