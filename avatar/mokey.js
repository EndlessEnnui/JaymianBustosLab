class object {
  constructor(_x, _y, _rotate, _scale)
{
  this.x = _x
  this.y = _y
  this.rotate = _rotate
  this.scale = _scale
}
  display(){
      push();
  fill(255, 255, 190);
    scale(this.scale);
  translate(this.x, this.y);
    rotate(this.rotate);
    ellipse(36, 66, 140, 60);
    ellipse(86, 36, 140, 60);
    ellipse(146, 56, 140, 55);
    ellipse(96, 66, 150, 60);
  
  pop();
  }
  
  move(){
    if (this.x <= width* 1.05){
      this.x += 2;
    } else{
      this.x = -250 - width*0.8
    }
  }
}
