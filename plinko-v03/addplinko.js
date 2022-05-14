function addPlinko() {
  //draw Player plinkos
  playerPosition = new Plinko(
    -20,
    -height / 2 + 200,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerPosition);

  playerCard = new Plinko(
    70,
    -height / 2 + 200,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerCard);

  playerHeight = new Plinko(
    -70,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerHeight);

  playerWeight = new Plinko(
    20,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerWeight);

  playerScore = new Plinko(
    120,
    -height / 2 + 280,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerScore);

  playerAge = new Plinko(
    -70,
    -height / 2 + 360,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerAge);

  playerName = new Plinko(
    20,
    -height / 2 + 360,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerName);

  playerVictory = new Plinko(
    120,
    -height / 2 + 360,
    pRadius,
    pRadius,
    pAngleStart,
    "brown",
    true
  );
  plinkos.push(playerVictory);

  // console.log(plinkos);

  //polygons
  // polygons.push(new Poly(0, 50, 7, 40, "brown"));

  //draw club plinkos
  clubCountry = new Plinko(
    posStart.x,
    posStart.y,
    pRadius,
    pRadius,
    pAngleStart,
    "#ccccff",
    true
  );
  clubs.push(clubCountry);
  clubName = new Plinko(
    70,
    -height / 2 + 440,
    pRadius,
    pRadius,
    pAngleStart,
    "#ccccff",
    true
  );
  clubs.push(clubName);

  //draw referees plinkos
  refCountry = new Plinko(
    -70,
    -height / 2 + 520,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66",
    true
  );
  referees.push(refCountry);
  refName = new Plinko(
    20,
    -height / 2 + 520,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66",
    true
  );
  referees.push(refName);
  refCard = new Plinko(
    120,
    -height / 2 + 520,
    pRadius,
    pRadius,
    pAngleStart,
    "#ffcc66",
    true
  );
  referees.push(refCard);

  //covariate - number of draws
  // draws.push(new Boundary(width / 2 - 10, 80, 30, 40, -0.1, "black"));
}
