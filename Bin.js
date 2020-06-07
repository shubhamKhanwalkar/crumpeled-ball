class Bin{
  constructor(x, y, width, height) {
    var options = {
      isStatic : true 
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;  
    this.image = loadImage("dustbingreen.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    fill("yellow");
    image(this.image,0 ,-90 , 170, 200);
   // rect(0, 0, this.width, this.height);
    pop();
  } 
  

}




















