
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var bob, chain, topObject,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,680,800,20)
	 topObject = new Roof(400,350,360,20);
	bob1 = new Bob(350,350,40);
	chain1= new Chain(bob1.body,topObject.body,-145)
	bob2 = new Bob(1000,350,40);
	chain2= new Chain(bob2.body,topObject.body,-105)
	bob3 = new Bob(1000,350,40);
	chain3= new Chain(bob3.body,topObject.body,-65)
	bob4 = new Bob(359,350,40);
	chain4= new Chain(bob4.body,topObject.body,-25)
	bob5 = new Bob(363,350,40);
	chain5= new Chain(bob5.body,topObject.body,15)
	bob6 = new Bob(367,350,40);
    chain6= new Chain(bob6.body,topObject.body,55)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("teal");
  
  drawSprites();
 topObject.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
 chain6.display();

 bob1.display();
 bob2.display(); 
 bob3.display();
 bob4.display();
 bob5.display();
 bob6.display();
 ground1.display();
}



