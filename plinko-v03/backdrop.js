function drawPlayerBackdrop() {
  //player background
  push();
  // ambientMaterial(255);
  noStroke();
  translate(20, -220, -100);
  //   rotateZ(0.1);
  playerBackdrop.background("#620119");
  playerBackdrop.text("Player", 20, 50);
  playerBackdrop.fill("White");
  playerBackdrop.textSize(30);
  playerBackdrop.textAlign(LEFT);
  texture(playerBackdrop);
  plane(400, 300);
  pop();
}

function drawLeagueBackdrop() {
  push();
  // ambientMaterial(255);
  noStroke();
  translate(20, 10, -50);
  // rotateX(HALF_PI);
  leagueBackdrop.background("#C8D5E5");
  leagueBackdrop.text("League", 20, 30);
  leagueBackdrop.fill("Black");
  leagueBackdrop.textSize(20);
  leagueBackdrop.textAlign(LEFT);
  texture(leagueBackdrop);
  plane(240, 120);
  pop();
}

function drawRefereeBackdrop() {
  //referee background
  push();
  // ambientMaterial(255);
  fill("#FFE5B5");
  noStroke();
  translate(20, 150, -75);
  //   rotateZ(-0.1);
  refereeBackdrop.background("#FFE5B5");
  refereeBackdrop.text("Referee", 20, 30);
  refereeBackdrop.fill("Black");
  refereeBackdrop.textSize(20);
  refereeBackdrop.textAlign(LEFT);
  texture(refereeBackdrop);
  plane(320, 120);
  pop();
}

function removePlayerBackdrop() {
  //player background
  push();
  // ambientMaterial(255);
  fill(255);
  noStroke();
  translate(20, -220, -100);
  //   rotateZ(0.1);
  plane(400, 300);
  pop();
}

function removeLeagueBackdrop() {
  push();
  // ambientMaterial(255);
  fill(255);
  noStroke();
  translate(20, 10, -50);
  // rotateX(HALF_PI);
  plane(240, 120);
  pop();
}

function removeRefereeBackdrop() {
  //referee background
  push();
  // ambientMaterial(255);
  fill(255);
  noStroke();
  translate(20, 150, -75);
  //   rotateZ(-0.1);
  plane(320, 120);
  pop();
}

function drawAxis() {
  //*****************static odd ratio plane*/
  oddRatio.background("black");
  oddRatio.textAlign(CENTER);
  oddRatio.fill(255);
  oddRatio.textSize(16);
  for (let i = 0; i < oddratios.length; i++) {
    let x = map(i, 0, oddratios.length - 1, -20, 450);
    oddRatio.text(oddratios[i], x, 270);
  }
  oddRatio.textSize(16);
  oddRatio.text("Odd Ratios", 80, 300);
  //display odd ratio plane
  push();
  noStroke();
  translate(0, height / 2 - 50, -15);
  rotateX(PI / 1.98);
  // ambientMaterial(255, 0, 0);
  texture(oddRatio);
  plane(800, 800);
  pop();
}
