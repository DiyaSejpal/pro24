
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Hammer;
var Stone;
var Rubber;
var Iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	plane = new Plane(100,height,1400,20);
	Hammer = new hammer(810,350);
	Stone = new stone(700,320,70,70);
	Iron = new iron(300,300,70,70);
	Rubber = new rubber(120,50,30);
	Sand = new sand(100,40,20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  

plane.display();
Hammer.display();
Stone.display();
Iron.display();
Rubber.display();
Sand.dispaly();

  drawSprites();
 
}



