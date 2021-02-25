
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(1600,700);

	var bobDiameter=40;
	engine = Engine.create();
	world = engine.world;
	var centerBobX=width/2;
	var centerBobY=height/4+500;

	bob1= new Bob(centerBobX,centerBobY,bobDiameter);
	bob2= new Bob(centerBobX-bobDiameter,centerBobY,bobDiameter);
	bob3= new Bob(centerBobX-2*bobDiameter,centerBobY,bobDiameter);
	bob4= new Bob(centerBobX+bobDiameter,centerBobY,bobDiameter);
	bob5= new Bob(centerBobX+2*bobDiameter,centerBobY,bobDiameter);
	roof = new Roof(width/2,height/4,width/7,20);
	rope1= new Rope(bob1.body,roof.body,0,0);
	rope2= new Rope(bob2.body,roof.body,-bobDiameter,0);
	rope3= new Rope(bob3.body,roof.body,-2*bobDiameter,0);
	rope4= new Rope(bob4.body,roof.body,bobDiameter,0);
	rope5= new Rope(bob5.body,roof.body,2*bobDiameter,0);
	
  
}


function draw() {
 
  background(255);
  Engine.update(engine);
  bob1.display();
 bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
 
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-50,y:-45});

  	}
}


