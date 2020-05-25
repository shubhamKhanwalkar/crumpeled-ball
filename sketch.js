var d1,d2,d3,ball,shooter,ground,box,ball_img;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preLoad() {
  ball_img = loadImage ("dustbingreen.png"); 
}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  d1 = new Bin(870,430,20,180);
  d2 = new Bin(945,510,130,10);
  d3 = new Bin(1020,430,20,180);
  ball = new Ball(100,100,45,45);
  shooter = new Shooter(ball.body,{x:200,y:200});
  box = createSprite (200,200,100,100);
  ground = new Ground(width/2,530,width,30);
  box.addImage(ball_img);

}



function draw() {
  Engine.update(engine);
  background(255,255,2550);  
  ball.display();
  d1.display();
  d2.display();
  d3.display();
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
 