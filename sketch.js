
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boxBottom=createSprite(width/2, height-50,200,20)
	boxBottom.shapeColor="red"
	boxLeftSide=createSprite(width/2-100, height-90,20,100)
	boxLeftSide.shapeColor="red"
	boxRightSide=createSprite(width/2+100, height-90,20,100)
	boxRightSide.shapeColor="red"

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Paper()
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

