//credit: https://compform.net/js_lab/js_lab.html?https://sketches2022spring.compform.net/posts/WgfwTaX6jXH5QXuqm/code

const pathPoints = 80;
const paths = 29;
const distOffset = 1;
const distance = 420 / paths - distOffset;

const bgColor = "black";
const lineColor = "white";

let lineWidth = 0;

const lineHeights = [];

let renderCount = 0;
let renderCountIncrement = 0.2;
const renderCountMax = 200;
const maxAmplitude = 150;
const baseLineAmplitude = 4;

function setup() {
  createCanvas(800, 600);
  lineWidth = width * 0.5;

  frameRate(10);
  stroke(lineColor);
  noFill();

  for (let i = 0; i < paths; i++) {
    lineHeights.push(1);
  }
}

function draw() {
  background(bgColor);

  translate(width / 2 - lineWidth * 0.78, height / 5);

  for (let i = 0; i < paths; i++) {
    translate(distance / 2 + 0.1 * i, distance);
    //text
    push();
    fill(colorSwitch(i));
    noStroke();
    textSize(10);
    text(`Team ${i + 1}`, distance / 2 - 1 * i, distance);
    pop();

    //line
    beginShape();
    for (let p = 0; p < pathPoints; p++) {
      noFill();
      let pRatio = p / pathPoints;

      let pX = pRatio * lineWidth;

      let multiplicator = (sin(pRatio * TWO_PI - PI * 0.8) + 1) / 2;

      multiplicator = pow(multiplicator, 6);

      // , lineHeights[i] * 0.1

      // let pY = noise( p * lineHeights[i] * 0.03 ) * baseLineAmplitude;
      // noiseDetail(lineHeights[i], p );

      let pY =
        noise(lineHeights[i] * 0.1, p * 0.02) * multiplicator * maxAmplitude;
      pY += (noise(p, lineHeights[i]) - 0.8) * baseLineAmplitude;
      fill(colorSwitch(i));
      vertex(pX, -pY);
    }
    endShape();
  }

  lineHeights.pop();
  lineHeights.unshift(renderCount);

  renderCount += renderCountIncrement;
  if (renderCount >= renderCountMax) {
    renderCountIncrement = -1;
  } else if (renderCount <= 0) {
    renderCountIncrement = 1;
  }
}

function colorSwitch(i) {
  if (i <= 5) {
    return "purple";
  } else if (i <= 13) {
    return "green";
  } else if (i <= 25) {
    return "steelblue";
  } else {
    return "beige";
  }
}
