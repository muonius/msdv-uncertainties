function createLabel() {
  // events for when the pinball hits stuff
  Matter.Events.on(engine, "collisionStart", function (event) {
    let pairs = event.pairs;
    pairs.forEach(function (pair) {
      if (
        pair.bodyB.label === "particle" &&
        pair.bodyA.label != "boundary" &&
        pair.bodyA.label != "particle" &&
        pair.bodyA.label != "Circle Body"
      ) {
        pingParticle(pair.bodyA);
      }
    });
  });
}

function pingParticle(particle) {
  // let toolip=createGraphics(200,200)
  // tooltip.text(${particle.label})
  // tooltip.textSize(20)
  // push()
  // texture(tooltip)
  // plane(300,300)
  // pop()
  plinkoLabel = particle.label;
  if (!plinkolabels.includes(plinkoLabel)) {
    plinkolabels.push(plinkoLabel);
    plinkopositions.push(particle.position);
    uniquepositions = [...new Set(plinkopositions)];
    uniquelabels = [...new Set(plinkolabels)];
  }

  setTimeout(function () {
    for (let i = 0; i < plinkopositions.length; i++) {
      plinkopositions.splice(i, 1);
      i--;
    }
    for (let i = 0; i < plinkolabels.length; i++) {
      plinkolabels.splice(i, 1);
      i--;
    }
  }, 3600);
}
