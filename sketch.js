var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	 
	 ground = new Ground(600,390,1200,20);
	 paperBall = new Paper(100,0,30);

	  //creating a box
	 
	  var boxRight_options={
		isStatic:true
	}

   boxRight= Bodies.rectangle(1000,330,20,100,boxRight_options);
   World.add(world,boxRight); 

	var boxLeft_options={
	   isStatic:true
   }

   boxLeft= Bodies.rectangle(800,330,20,100,boxLeft_options);
   World.add(world,boxLeft); 

   var boxBottom_options = {
	   isStatic:true
   }

   boxBottom = Bodies.rectangle(900,370,100,10, boxBottom_options);
   World.add(world,boxBottom);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

 rectMode(CENTER);
  background(0);

  ground.display();
  paperBall.display();

  fill("white");
  stroke("white");

  rect(boxRight.position.x, boxRight.position.y , 20, 100);
  rect(boxLeft.position.x,boxLeft.position.y, 20,100);
  rect(boxBottom.position.x,boxBottom.position.y, 200,20);


  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:85 , y:-85});
	}
}

