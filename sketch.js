var d1,d2,d3,ball,shooter,ground,box,ball_img;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  d1 = new BaseClass(880,430,20,190);
  d3 = new BaseClass(1016,430,20,190);
  d2 = new Bin(948,510,130,10);
  ball = new Ball(100,100,45,45);
  shooter = new Shooter(ball.body,{x:200,y:200});
 
  ground = new Ground(width/2,530,width,30);
 
}



function draw() {
  Engine.update(engine);
  background(255,255,2550);  
  ball.display();
  d1.display();
  d3.display();
  d2.display(); 
  ground.display();
 
  shooter.display();
 // console.log(BaseClass);
 // ellipse (10,20,50,50);

 drawSprites();

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})   
 }
 
 function mouseReleased() {
   shooter.fly();  
 }
 