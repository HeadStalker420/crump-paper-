// the const for the code
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// vars
var side1
var side2
var base
var paper,paperImage
function preload()
{
	paperImage=loadImage("brrr",download.jpg)
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//the chade ka dabba 
side1= createSprite(400,300,20,100)
side1= createSprite(300,300,20,100)
base= createSprite(350,340,100,20)
// phaltu paper 
paper = createSprite(350,570,40,40)
paper.addImage(paperImage)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 

}
function keypressed(){
	if(keyCode==UP_ARROW){
		matter.Body.applyForce(paper.body,paper.body.position,85,85)
	}
}



