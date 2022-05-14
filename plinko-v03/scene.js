function setScene(val) {
  if (val === "PLR") {
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }

    for (let i = 0; i < leagues.length; i++) {
      leagues[i].show();
    }

    for (let i = 0; i < referees.length; i++) {
      referees[i].show();
    }

    if (frameCount % 180 === 0 && teams.length < 2) {
      threeCovariates();
    }
  }

  if (val === "PL") {
    removeReferees();
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }
    for (let i = 0; i < leagues.length; i++) {
      leagues[i].show();
    }
    if (teams.length < 4) {
      playerLeagues();
    }
  }

  if (val === "PR") {
    removeLeagues();
    addReferees();
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }
    for (let i = 0; i < referees.length; i++) {
      referees[i].show();
    }
    if (frameCount % 60 == 0 && teams.length < 6) {
      playerReferees();
    }
  }

  if (val === "P") {
    removeLeagues();
    removeReferees();
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }
    if (teams.length < 8) {
      onlyPlayers();
    }
  }

  if (val === "L") {
    removePlayers();
    addLeagues();
    for (let i = 0; i < leagues.length; i++) {
      leagues[i].show();
    }
    if (teams.length < 11) {
      onlyLeagues();
    }
  }

  if (val === "R") {
    removeLeagues();
    addReferees();
    for (let i = 0; i < referees.length; i++) {
      referees[i].show();
    }
    if (teams.length < 14) {
      onlyReferees();
    }
  }

  if (val === "D") {
    removePlayers();
    removeReferees();
    removeLeagues();

    if (teams.length < 16) {
      onlyDraws();
    }
  }

  if (val === "N") {
    removePlayers();
    removeReferees();
    removeLeagues();

    if (teams.length < 17) {
      noCovariates();
    }
  }
}
