//Revisão sobre matrizes

//Exemplos de matrizes
//Matriz apenas com números
var matriz1 = [1,58,8,4,6,16];
console.log(matriz1);

//Matriz com diferentes tipos de dados
var matriz2 = ["Melissa", 67, true, "Arthur", false];
//console.log(matriz2);

//Matriz de matrizes
var matriz3 = [matriz1, matriz2];
//console.log(matriz3);

//Acessando elementos da matriz de acordo com o índice
//console.log(matriz1[4]);
//console.log(matriz2[2]);
//console.log(matriz3[1][3]);

//Colocando e retirando elementos da matriz
matriz1.push(15);
matriz1.push(23);
//console.log(matriz1);
matriz1.pop();
//console.log(matriz1);


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;
var creeper;
var villager, obsidian;
var witer,ang;
var bala;
var bigmac=[];
var piratasdocaribe;

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
 angleMode(DEGREES)
ang=20;
witer=new Golem(180,110,130,100,ang);

piratasdocaribe = new Piratasdocaribe(width-79, height-60, 170, 170, -80);
 
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
witer.mostrar(); 

Matter.Body.setVelocity(piratasdocaribe.corpo, {x:-0.9,y:0});

piratasdocaribe.mostrar(); 
for(var i=0;i<bigmac.length;i++){
  coca(bigmac[i],i);
}
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    bigmac[bigmac.length-1].receba();
  }
}
function keyPressed(){
if(keyCode===DOWN_ARROW){
var bala = new Canhao(witer.posX, witer.posY);
bigmac.push(bala)
}
}
function coca(bala,i){
  if(bala){
    bala.mostrar();
  }
}