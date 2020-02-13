/*
  Code Self-Portrait
  by Kara Ngamsopee
  
  Click on the nose to enter Angry state.
  Click on the eyes to enter Disgusted state.
  Press space bar to go back to Happy state.
*/
var state;
var stateAngry = 1;
var stateHappy = 2;
var stateDisgusted = 3;

function setup() {
  createCanvas(500, 500);
  state = stateHappy;
}

function draw() {
  print(mouseX + "," + mouseY);

  // check for disgusted look
  if (((mouseX > 178 && mouseX < 223) || (mouseX > 278 && mouseX < 323)) && mouseY > 300 && mouseY < 330 && mouseIsPressed) {
    state = stateDisgusted;
  }
  // check for angry look
  if ((mouseX > 235 && mouseX < 262) && mouseY > 320 && mouseY < 350 && mouseIsPressed) {
    state = stateAngry;
  }

  if (state == stateHappy) {
    background(240, 232, 255);
  }
  
  if (state == stateDisgusted) {
    background(129, 163, 132);
  }
  
  if (state == stateAngry) {
    background(201, 50, 0);
  }
  
  // long hair
  noStroke();
  fill(51, 21, 0);
  beginShape();
  vertex(135, 197);
  vertex(386, 200);
  vertex(364, 504);
  vertex(145, 504);
  endShape();

  // shirt
  noStroke();
  fill(228, 237, 218);
  arc(250, 506, 200, 170, PI, TWO_PI);

  // neck
  noStroke();
  fill(255, 230, 204);
  arc(250, 415, 50, 50, 0, PI);

  // face
  noStroke();
  strokeWeight(1);
  fill(255, 230, 204);
  ellipse(250, 300, 200, 250);

  // left lashes
  strokeWeight(1);
  stroke(0);
  noFill();
  line(177, 301, 183, 310);

  strokeWeight(1);
  stroke(0);
  noFill();
  line(185, 298, 187, 308);

  strokeWeight(1);
  stroke(0);
  noFill();
  line(193, 295, 194, 308);

  // left eye
  stroke(0);
  strokeWeight(1);
  fill(255);
  ellipse(200, 315, 45, 25);

  fill(0);
  ellipse(200, 315, 25, 25);


  // right lashes
  strokeWeight(1);
  stroke(0);
  noFill();
  line(301, 294, 301, 308);

  strokeWeight(1);
  stroke(0);
  noFill();
  line(310, 296, 308, 308);

  strokeWeight(1);
  stroke(0);
  noFill();
  line(318, 297, 315, 309);

  // right eye
  fill(255);
  ellipse(300, 315, 45, 25);

  fill(0);
  ellipse(300, 315, 25, 25);

  // nose
  stroke(255, 168, 82);
  fill(255, 195, 135);
  triangle(250, 320, 237, 350, 260, 350);

  // hair
  noStroke();
  fill(51, 21, 0);
  triangle(250, 180, 150, 295, 135, 197);

  noStroke();
  fill(51, 21, 0);
  triangle(250, 180, 350, 310, 386, 200);

  noStroke();
  fill(51, 21, 0);
  triangle(250, 180, 304, 136, 386, 200);

  noStroke();
  fill(51, 21, 0);
  triangle(250, 180, 135, 197, 206, 131);

  noStroke();
  fill(51, 21, 0);
  triangle(304, 136, 250, 180, 206, 131);

  // cheeks
  noStroke();
  fill(255, 148, 148);
  beginShape();
  vertex(200, 367);
  vertex(186, 346);
  vertex(190, 337);
  vertex(200, 345);
  vertex(207, 337);
  vertex(212, 345);
  endShape();

  noStroke();
  fill(255, 148, 148);
  beginShape();
  vertex(300, 367);
  vertex(285, 346);
  vertex(292, 337);
  vertex(300, 345);
  vertex(310, 337);
  vertex(315, 345);
  endShape();

  // background
  strokeWeight(4);
  stroke(240, 255, 217);
  noFill();
  beginShape();
  vertex(46, 153);
  vertex(51, 132);
  vertex(74, 142);
  vertex(79, 118);
  vertex(104, 132);
  vertex(114, 106);
  endShape();

  stroke(240, 255, 217);
  noFill();
  beginShape();
  vertex(386, 114);
  vertex(415, 108);
  vertex(408, 135);
  vertex(439, 131);
  vertex(429, 163);
  vertex(459, 161);
  endShape();

  noStroke();
  fill(255, 247, 194);
  ellipse(92, 250, 15, 15);

  noStroke();
  fill(255, 194, 214);
  ellipse(39, 317, 15, 15);

  noStroke();
  fill(203, 240, 242);
  ellipse(94, 399, 15, 15);

  noStroke();
  fill(203, 240, 242);
  ellipse(460, 235, 15, 15);

  noStroke();
  fill(255, 247, 194);
  ellipse(406, 326, 15, 15);

  noStroke();
  fill(255, 194, 214);
  ellipse(464, 377, 15, 15);

  if (state == stateDisgusted) {
    drawDisgusted();
  }

  if (state == stateHappy) {
    drawHappy();
  }

  if (state == stateAngry) {
    drawAngry();
  }

}

function drawDisgusted() {
  
  for (let i = 0; i < 4; i += 1) {
    // left eye
    stroke(0)
    strokeWeight(1)
    fill(255)
    ellipse(200, 315, 45, 25)
    fill(0)
    ellipse(200 - i, 315, 25, 25)

    // right eye 
    stroke(0)
    strokeWeight(1)
    fill(255)
    ellipse(300, 315, 45, 25)
    fill(0)
    ellipse(300 - i, 315, 25, 25)

    // mouth
    stroke(0);
    strokeWeight(4);
    noFill();
    arc(253, 387, 20, 10, PI, TWO_PI);

    // brows
    stroke(0);
    strokeWeight(4);
    noFill();
    arc(305, 265, 30, 10, PI, TWO_PI);

    noFill();
    arc(205, 265, 30, 10, PI, TWO_PI);

  }
}

function drawHappy() {
  // brows
  stroke(0);
  strokeWeight(4);
  noFill();
  arc(300, 280, 30, 10, PI, TWO_PI);

  noFill();
  arc(200, 280, 30, 10, PI, TWO_PI);

  // mouth
  noStroke();
  fill(240, 90, 67);
  arc(250, 377, 35, 33, 0, PI);
}

function drawAngry() {
  // brows
  stroke(0);
  strokeWeight(6);
  noFill();
  line(185, 282, 215, 291)
  line(312, 282, 282, 291)
  // mouth
  stroke(0);
  strokeWeight(4);
  noFill();
  arc(250, 387, 40, 20, PI, TWO_PI);
  
  // left eye
  stroke(0);
  strokeWeight(1);
  fill(255);
  ellipse(200, 315, 45, 30);
  fill(0);
  ellipse(200, 315, 30, 30);

  // right eye
  fill(255);
  ellipse(300, 315, 45, 30);

  fill(0);
  ellipse(300, 315, 30, 30);
}

function keyPressed() {
  if (key === ' ') {
    state = stateHappy;
  }
}