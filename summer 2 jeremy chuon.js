class Wave {
  constructor(y, x) {
    this.yPos = y;
    this.xPos = x;
  }

  createWave() {
    fill("#3F51B5");
    //noStroke();
    strokeWeight(3);
    beginShape();
    vertex(this.xPos, 290);
    bezierVertex((this.xPos+100), (this.yPos-5), (this.xPos+100), (this.yPos-120), (this.xPos+200), 290);
    bezierVertex((this.xPos+300), (this.yPos-5), (this.xPos+300), (this.yPos-120), (this.xPos+400), 290);
    bezierVertex((this.xPos+500), (this.yPos-5), (this.xPos+500), (this.yPos-120), (this.xPos+600), 290);
    vertex(600, 400);
    vertex(0, 400);
    vertex(0, 290);
    endShape();
  }
  
  setSpeed() {
    this.ySpeed = 1;
  }
  
  moveWave() {
    this.yPos += this.ySpeed;
    if (this.yPos + 40 >= height || this.yPos <= 290) {
      this.ySpeed *= -1;
    }
  }
}

function setup() {
  createCanvas(600, 400);
}

let wave1 = new Wave(300, 0);

wave1.setSpeed();

let startX = 0;
let startY = 325;
let endX = 500;
let endY = 100;
let step = 0.008;
let path = 0;
let dX = endX - startX;
let dY = endY - startY;
  
function draw() {
  background(0, 100, 200);
  
  path += step;
  if (path < 1) {
    xSun = startX + (path * dX);
    ySun = startY + (pow(path, 0.5) * dY);
    //ySun = startY + (xSun - 1)*xSun;
  }

  fill("orange");
  circle(xSun, ySun, 150);
  
  wave1.createWave();
  wave1.moveWave();
}