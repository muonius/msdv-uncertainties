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

    if (frameCount % 180 === 0 && teams.length < 3) {
      threeCovariates();
    }
  }

  if (val === "PL") {
    removeReferees();
    removeRefereeBackdrop();
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
    removeLeagueBackdrop();
    drawRefereeBackdrop();
    addReferees();

    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }
    for (let i = 0; i < referees.length; i++) {
      referees[i].show();
    }
    if (frameCount % 60 == 0 && teams.length < 9) {
      playerReferees();
    }
  }

  if (val === "P") {
    removeLeagues();
    removeLeagueBackdrop();
    removeReferees();
    removeRefereeBackdrop();
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }
    if (teams.length < 14) {
      onlyPlayers();
    }
  }

  if (val === "L") {
    removePlayers();
    removePlayerBackdrop();
    addLeagues();
    removeRefereeBackdrop();
    for (let i = 0; i < leagues.length; i++) {
      leagues[i].show();
    }
    if (teams.length < 25) {
      onlyLeagues();
    }
  }

  // if (val === "R") {
  //   removePlayerBackdrop();
  //   removeLeagues();
  //   removeLeagueBackdrop();
  //   addReferees();
  //   drawRefereeBackdrop();
  //   for (let i = 0; i < referees.length; i++) {
  //     referees[i].show();
  //   }
  //   if (teams.length < 14) {
  //     onlyReferees();
  //   }
  // }

  if (val === "D") {
    removeLeagues();
    removePlayerBackdrop();
    removeLeagueBackdrop();
    removeRefereeBackdrop();
    addDraw();
    for (let i = 0; i < numDraws.length; i++) {
      numDraws[i].show();
    }
    if (teams.length < 26) {
      onlyDraws();
    }
  }

  if (val === "N") {
    removeDraw();
    removePlayerBackdrop();
    removeLeagueBackdrop();
    removeRefereeBackdrop();

    addFloat();
    for (let i = 0; i < floats.length; i++) {
      floats[i].show();
    }

    if (teams.length < 27) {
      noCovariates();
    }
    // addReferees();
    // addPlayers();
    // addLeagues();
    // drawRefereeBackdrop();
    // drawPlayerBackdrop();
    // drawLeagueBackdrop();
  }
}
