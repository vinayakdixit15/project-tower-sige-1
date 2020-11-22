const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint 

//variables
var engine, world;
var ground;





function setup() {
  createCanvas(1270,580);
  
  engine = Engine.create();
  world = engine.world;
 
  Groundclass=new Ground(width/2,height-2,width,20)
  stand1=new Ground(400,446,350,20)
  stand2=new Ground(900,320,300,20)

  //stand1
//1
  box1=new Box(400,350,60,60)
  box2=new Box(460,350,60,60)
  box3=new Box(340,350,60,60)
  box4=new Box(280,350,60,60)
  box5=new Box(520,350,60,60)
//2
  box6=new Box(400,280,60,60)
  box7=new Box(460,280,60,60)
  box8=new Box(340,280,60,60)
//3
  box9=new Box(400,220,60,60)
  
//stand2
//1
  box10=new Box(800,280,60,60)
  box11=new Box(860,280,60,60)
  box12=new Box(920,280,60,60)
  box13=new Box(980,280,60,60)
//2
  box14=new Box(830,200,60,60)
  box15=new Box(890,200,60,60)
  box16=new Box(950,200,60,60)
//3
  box17=new Box(860,100,60,60)
  box18=new Box(920,100,60,60)
//4
  box19=new Box(890,0,60,60)

polygon = Bodies.circle(50,200,30);
World.add(world,polygon);

slingshot = new SlingShot(this.polygon,{x:100,y:200});

}



function draw() {
  
background("black")
Engine.update(engine);

  Groundclass.display()

  stand1.display()
  stand2.display()
  fill("cyan")
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()

  fill("lightpink")
  box6.display()
  box7.display()
  box8.display()

  fill("turquoise")
  box9.display()

  fill("cyan")
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  
  fill("lightpink")
  box14.display()
  box15.display()
  box16.display()

  fill("turquoise")
  box17.display()
  box18.display()
  
  fill("lightgreen")
  box19.display()
 
  slingshot.display()
  fill("yellow")
  ellipseMode(CENTER)
  ellipse(polygon.position.x,polygon.position.y,60,60)

}

function mouseDragged(){

  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
 
}
  
function mouseReleased(){

  slingshot.fly()

}








