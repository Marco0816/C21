const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var btn1,btn2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
    restitution : 0
  }

  ball = Bodies.circle(199,200,30,ball_options);
  World.add(world, ball);

  btn1=createImg("up.png");//create a button using a image
  btn1.position(220,30); //position
  btn1.size(50,50);//size
  btn1.mouseClicked(vforce);//function calling for vertical force when mosue is pressed
  
  btn2=createImg("right.png");
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(hforce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y, 30);

}
function hforce(){
  //Matter.Body.applyForce(body,body_position{x:0,y:0},force{x:0.2,y:0});

Matter.Body.applyForce(ball,{x:0,y:0},{x:0.2,y:0});
}
function vforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.2});
}

