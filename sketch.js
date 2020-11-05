
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 500);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(600,490,1600,20)
	paper=new Paper (1300,460,20)
	Dustbin1 = new Dustbin(450,430,20,100)
	Dustbin2 = new Dustbin(300,430,20,100)
	Dustbin3 = new Dustbin(375,470,130,20)


	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  Dustbin1.display()
  Dustbin2.display()
  Dustbin3.display()

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:-85,y:-85})
	 }
   }

