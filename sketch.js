
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 630);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(200,100,20)


var ground_options ={
	'isStatic' : true
}
ground = Bodies.rectangle(600,600,1300,30,ground_options)
World.add(world,ground)

var left_options ={
	'isStatic' : true
}
left = Bodies.rectangle(800,480,30,150,left_options)
World.add(world,left)

var right_options ={
	'isStatic' : true
}
right = Bodies.rectangle(1100,480,30,150,right_options)
World.add(world,right)

var down_options ={
	'isStatic' : true
}
down = Bodies.rectangle(950,570,200,30,down_options)
World.add(world,down)

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  fill("cyan");
paper.display();

rectMode(CENTER);
rect(ground.position.x,ground.position.y,1300,30)



rectMode(CENTER);
rect(left.position.x,left.position.y,30,150)

rectMode(CENTER);
rect(right.position.x,right.position.y,30,150)

rectMode(CENTER);
rect(down.position.x,down.position.y,330,30)


  drawSprites();
 
}



function keyPressed(){
	if(keyCode === DOWN_ARROW){
	Matter.Body.applyForce(paper.bodies,paper.bodies.position,{x: -15,y: 15})
	
		
	}
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.bodies,paper.bodies.position,{x: 15,y: -15})
	}
}