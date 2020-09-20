const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
function setup() {
  createCanvas(600,600);
 
  engine = Engine.create();
  world = engine.world;

  var option ={
    isStatic : true
  }
  object = Bodies.rectangle(300,600,600,20,option);
  World.add(world,object);
  
  var option ={
    restitution : 1
  }
  ball = Bodies.circle(300,5,20,option);
  World.add(world,ball);
}

function draw() {
  background("yellow"); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(object.position.x,object.position.y,600,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}