
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// let or var 
let engine;
let world;

var ball;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    isstatic : true,
    restitution : 2.95,
    frictionAir : 0.01,
  }
  ball = Bodies.circle(100,10,20,ball_options);

  World.add(world,ball);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
 Engine.update(engine);
 ellipse(ball.position.x,ball.position.y,20);
}

