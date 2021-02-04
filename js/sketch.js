
let squareX = 500;
let squareY = 500;
let r = 30;
let fr = 8;
let rectLeftW = 300;
let rectLeftH = 300;
let rectRightW = 300;
let rectRightH = 300;
let textUp = 'are you tired of being RANDOM?'
let textDown = 'me neither'
let leading = 50;


function setup() {
  // put setup code herex
  createCanvas(windowWidth,windowHeight);
  frameRate(fr);

  rectMode(CENTER);


}


function draw() {
  // put drawing code here
  background(20);


  //create line square

  for(i = windowWidth-rectRightW ; i<= windowWidth ; i+=20){


    strokeWeight(random(5,10));
    stroke(random(25,75));
    line(i, windowHeight-rectRightH, i, windowHeight);

  }


  //create a centric circle

  for(i = 0 ; i<= rectLeftW ; i+=50){

      noFill();
      strokeWeight(random(5,10));
      stroke(random(25,75));
      rect(rectLeftW/2,rectLeftH/2,rectLeftW-i,rectLeftH-i);

    }


  //create matrix out of circles

  for(i = windowHeight/2-squareY/2 ; i <= windowHeight/2+squareY/2 ; i+=r+10){

  for(j = windowWidth/2-squareX/2 ; j <= windowWidth/2+squareX/2; j+=r+10){

    noStroke();
    fill(random(255),random(255),random(255));
    circle(j,i,random(r));

  }

  }


  //text messages
  fill(255);
  textSize(24);

  textAlign(RIGHT);
  text(textUp, windowWidth/2+squareX/2, windowHeight/2-squareY/2-leading);

  textAlign(LEFT);
  text(textDown, windowWidth/2-squareX/2, windowHeight/2+squareY/2+leading);



 //the mouse
 fill(255);
 quad(mouseX+r/2, mouseY, mouseX, mouseY+r/2, mouseX-r/2, mouseY, mouseX, mouseY-r/2);


}
