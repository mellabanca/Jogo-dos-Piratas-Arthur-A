const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;
var creeper;
var villager, obsidian;


function preload() {
  creeper = loadImage("./assets/background.gif");
  obsidian = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 villager = Bodies.rectangle(160, 350, 160, 310, options);
 World.add(world, villager);
 
}

function draw() {
  background(189);
  image(creeper, 0, 0, 1200, 600);


  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);

 push();
 imageMode(CENTER);
 image(obsidian,villager.position.x, villager.position.y, 160, 310);
 pop();
  
   
}
