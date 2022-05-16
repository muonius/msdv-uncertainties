function onlyLeagues() {
  let teamF = new Particle(0, -height / 2 + 50, 10, 0.5, 1, "pink", 0.5);
  teams.push(teamF);
  let teamG = new Particle(20, -height / 2 + 50, 10, 0.1, 0.1, "pink", 0.5);
  teams.push(teamG);
}

function noCovariates() {
  let teamD = new Particle(
    -150,
    -height / 2 + 150,
    10,
    0.1,
    0.5,
    colorParticle.logistic,
    0.01
  );
  teams.push(teamD);
  let teamE = new Particle(
    -120,
    -height / 2 + 200,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.05
  );
  teams.push(teamE);
  let teamF = new Particle(
    -80,
    -height / 2 + 250,
    10,
    0.1,
    0.9,
    colorParticle.poisson,
    0.05
  );
  teams.push(teamF);
}

function playerLeagues() {
  let teamD = new Particle(
    30,
    -height / 2 + 50,
    10,
    0.1,
    0.5,
    colorParticle.linear,
    0.01
  );
  teams.push(teamD);
  let teamE = new Particle(
    20,
    -height / 2 + 200,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.05
  );
  teams.push(teamE);
  let teamF = new Particle(
    40,
    -height / 2 + 150,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.05
  );
  teams.push(teamF);
  let teamG = new Particle(
    20,
    -height / 2 + 100,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.05
  );
  teams.push(teamG);
  let teamH = new Particle(
    50,
    -height / 2 + 50,
    10,
    0.1,
    0.5,
    colorParticle.logistic,
    0.01
  );
  teams.push(teamH);
}

function playerReferees() {
  let teamD = new Particle(
    30,
    -height / 2 + 50,
    10,
    0.1,
    0.5,
    colorParticle.linear,
    0.01
  );
  teams.push(teamD);
  let teamE = new Particle(
    20,
    -height / 2 + 200,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.05
  );
  teams.push(teamE);
  let teamF = new Particle(
    40,
    -height / 2 + 150,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.05
  );
  teams.push(teamF);
  let teamG = new Particle(
    20,
    -height / 2 + 100,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.05
  );
  teams.push(teamG);
  let teamH = new Particle(
    -10,
    -height / 2 + 50,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.01
  );
  teams.push(teamH);
}

function onlyPlayers() {
  let teamA = new Particle(
    30,
    -height / 2 + 50,
    10,
    0.1,
    0.5,
    colorParticle.logistic,
    0.01
  );
  teams.push(teamA);
  let teamB = new Particle(
    20,
    -height / 2 + 200,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.05
  );
  teams.push(teamB);
  let teamC = new Particle(
    10,
    -height / 2 + 150,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.05
  );
  teams.push(teamC);
  let teamD = new Particle(
    10,
    -height / 2 + 100,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.05
  );
  teams.push(teamD);
  let teamK = new Particle(
    40,
    -height / 2 + 150,
    10,
    0.1,
    0.5,
    colorParticle.logistic,
    0.01
  );
  teams.push(teamK);

  let teamE = new Particle(
    0,
    -height / 2 + 200,
    10,
    0.1,
    0.9,
    colorParticle.poisson,
    0.05
  );
  teams.push(teamE);
  let teamF = new Particle(
    20,
    -height / 2 + 150,
    10,
    0.1,
    0.9,
    colorParticle.poisson,
    0.05
  );
  teams.push(teamF);
  let teamG = new Particle(
    20,
    -height / 2 + 100,
    10,
    0.1,
    0.9,
    colorParticle.poisson,
    0.05
  );
  teams.push(teamG);
  let teamH = new Particle(
    -30,
    -height / 2 + 100,
    10,
    0.1,
    0.7,
    colorParticle.poisson,
    0.3
  );
  teams.push(teamH);
  let teamI = new Particle(
    50,
    -height / 2 + 150,
    10,
    0.1,
    0.9,
    colorParticle.poisson,
    0.5
  );
  teams.push(teamI);
  let teamJ = new Particle(
    150,
    -height / 2 + 150,
    10,
    0.1,
    0.5,
    colorParticle.misc,
    0.5
  );
  teams.push(teamJ);
}

function threeCovariates() {
  let teamH = new Particle(
    0,
    -height / 2 + 100,
    10,
    0.5,
    1,
    colorParticle.linear,
    0.1
  );
  teams.push(teamH);
  let teamI = new Particle(
    40,
    -height / 2 + 50,
    10,
    0.5,
    2,
    colorParticle.linear,
    0.01
  );
  teams.push(teamI);
  let teamJ = new Particle(
    20,
    -height / 2 + 150,
    10,
    0.5,
    2,
    colorParticle.linear,
    0.1
  );
  teams.push(teamJ);
}

function onlyLeagues() {
  let teamD = new Particle(
    70,
    -height / 2 + 350,
    10,
    0.1,
    0.9,
    colorParticle.logistic,
    0.05
  );
  teams.push(teamD);
}

function onlyDraws() {
  let teamD = new Particle(
    30,
    -height / 2 + 350,
    10,
    0.1,
    0.9,
    colorParticle.linear,
    0.1
  );
  teams.push(teamD);
}
