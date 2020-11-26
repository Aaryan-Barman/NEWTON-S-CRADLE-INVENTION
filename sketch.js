const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;
var roof;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height/4,width/7,20);

	pendulumDiameter=40;

	startPendulumPositionX=width/2;
	startPendulumPositionY=height/4+500;
	pendulum1=new Pendulum(startPendulumPositionX-pendulumDiameter*2,startPendulumPositionY,pendulumDiameter);
	pendulum2=new Pendulum(startPendulumPositionX-pendulumDiameter,startPendulumPositionY,pendulumDiameter);
	pendulum3=new Pendulum(startPendulumPositionX,startPendulumPositionY,pendulumDiameter);
	pendulum4=new Pendulum(startPendulumPositionX+pendulumDiameter,startPendulumPositionY,pendulumDiameter);
	pendulum5=new Pendulum(startPendulumPositionX+pendulumDiameter*2,startPendulumPositionY,pendulumDiameter);
	
	
	
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	sling1=new Sling(pendulum1.body,roof.body,-pendulumDiameter*2, 0)
    sling2=new Sling(pendulum2.body,roof.body,-pendulumDiameter*1, 0)
	sling3=new Sling(pendulum3.body,roof.body,0, 0)
	sling4=new Sling(pendulum4.body,roof.body,pendulumDiameter*1, 0)
	sling5=new Sling(pendulum5.body,roof.body,pendulumDiameter*2, 0)

	/*constraint1={
		bodyA:bob1.body,
		bodyB:roof.body,
		pointB: {x:-pendulumDiameter*2, y:0}
	}

	constraint2={
		bodyA:bob2.body,
		bodyB:roof.body,		
		pointB: {x:-pendulumDiameter, y:0}
	}


	constraint3={
		bodyA:bob3.body,
		bodyB:roof.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:bob4.body,
		bodyB:roof.body,		
		pointB: {x:pendulumDiameter, y:0}	

	}

	constraint5={
		bodyA:bob5.body,
		bodyB:roof.body,		
		pointB: {x:pendulumDiameter*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);


  roof.display();
  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()	
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(pendulum1.body,pendulum1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	pendulumBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(pendulumBodyPosition.x, pendulumBodyPosition.y, roofBodyX,roofBodyY);
}






