//I want to rotate the wings in place as opposed to moving from a set point. Ive tried using things like ellipseMode(CENTER); however it doesnt seem to work
var mic;
let micLevel;
let fr = 30;
let rectX;
let clr;
let clr2;
var y;
var s;
var changeDirection;



function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent('myCanvas');

  filter(BLUR, 3);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(fr);
  noStroke();
  s = 0
  y = 1;
  bg = color(103, 195,  235);
  changeDirection = false;
   object1 = new object (220/250, 100/250, 6)
   object2 = new object (300, 400, 6);
  object3 = new object (-250, 200)
}

function draw() {
    angleMode(DEGREES);

console.log(deltaTime)
  clr = 0 + 1 * (deltaTime);
  clr2 = (deltaTime/2);
  clr3 = (deltaTime);

  wingAngle = map(mic.getLevel(), 0, 0.1,0,0.9);

  background(bg);


  push();
  backDecal();
  pop();

object1.display();
object1.move();

object2.display();
object2.move();

object3.display();
object3.move();


  if (mouseX > width*0.4 && mouseX < width*0.6 && mouseY > height*0.3 && mouseY < height*0.55){
  console.log("mouse!");

    scale(0.25)
    translate(1000,800)
    rotate(frameCount*10)




} else {
  rotate(0);
   translate (0, y -25)
	if(y>75){
		changeDirection=true}
	else if (y<=0){
		changeDirection=false}
	if (y>=0 && changeDirection == false){
		y=y+1}
	else if(changeDirection == true){
		y=y-1}
}






  wings(wingAngle);
  arms();
  legs();
  hat();
  body();
  face();
  bow();
  glasses();


  }

  function backDecal(){
      push();
  noFill();
  stroke(255-clr2, 255, 0 +clr)
  rotate(20);
  scale(3)
  translate(50, -80)

  translate(0, 40)
  bezier(155, 20, 10, 10, 80, 120, -55, 80);

    translate(0, 40)
  bezier(155, 20, 10, 10, 80, 120, -55, 80);

    translate(0, 40)
  bezier(155, 20, 10, 10, 80, 120, -55, 80);


    translate(0, 40)

  pop();
  }



function wings () {
    //Wings
push();

  let a = color (236 - mouseX,236 - mouseY,182)
  fill (a);
push();
  rotate(-wingAngle);
  ellipseMode(CENTER);
      ellipse(169, 145, 65, 75);
      triangle(139, 129, 200, 130, 150, 99);
pop();

push();
  rotate(-wingAngle);
      ellipse(385, 160, 55, 55);

      triangle(420, 130, 420, 170, 340, 220);
pop();
}



function arms () {
     let b = color(119 - mouseX, 209 - mouseY, 155);
push();
    //Arms
  fill(b);
  //arm left
      triangle(130, 210, 100, 240, 125, 240);
  //arm right
      triangle(370, 230, 360, 270, 410, 280);
}
function legs () {
    //leg right
      triangle(245, 370, 280, 450, 310, 370);
  //leg left
      triangle(140, 350, 200, 440, 190, 370);
  pop();
}




function body () {
  push();
    let b = color(119 + mouseX, 209 + mouseY, 155);
  fill(b);
   rotate(7);
  //Back Blue Bod

rect(175, 130, 220, 240);
   //Front Bod
push();
    rotate(7);

  //corner left
      triangle(220, 345, 225, 300, 193, 330);
    //corner right
      triangle(407, 81, 365, 90, 385, 63);
pop();

push();
  let c = color (137 + mouseX, 240 + mouseY, 166);
  fill(c)
      rect(150, 110, 225, 240);
pop();
}




function hat(){
push();
  translate(width/ 250, height / 250);
  rotate(7);
  //Top Hat
    fill(0);
      rect (220, 100, 110, 30);
      rect (240, 0, 75, 100);
    fill(249, 252, 45)
      rect (240, 90, 75, 10);
  pop();
}



function face(){
    //Mouth/Eyes
  push();
  let d = color (0);
    fill(d);

  //Left Eye
      rect (160, 180, 70, 7);
  //Right Eye
      rect (290, 180, 70, 7);
  //Mouth
      rect (245, 225, 30, 4 + wingAngle*15);
  pop();
}




function bow(){
    push();
  rotate(1);
    fill(255, 36, 36);
      translate(110,100);
      triangle(150, 175, 180, 190, 180, 145);
      triangle(120, 145, 120, 190, 150, 175);
  pop();
}




function glasses(){
push();

    //translate (-110, -100);
    fill(0);
  rotate();
  //Center Glasses
      rect (140, 150, 85, 15);

  //Top Glasses
      rect (290, 150, 85, 15);
      rect (215, 170, 85, 15);

  //Bottom Glasses
      rect (140, 200, 85, 15);
      rect (290, 200, 85, 15);

  //Vertical Frames
  rectMode(CENTER)
    translate(145, 183)
    rotate(90)
      rect (0, 0, 65, 15);
      rect (0, -75, 65, 15);
      rect (0, -150, 65, 15);
      rect (0, -225, 65, 15);
  pop();

}

  function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    bg = color(252, 156,84);
  } else if (keyCode === RIGHT_ARROW) {
    bg = color(103, 195,  235)
  }
  }
