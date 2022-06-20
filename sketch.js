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
var mutiversso=[];
var piratasAnimation = [];
var piratasDados, piratasSpritesheet;
var animando = [];
var afundandoNA, dadosSpritesheet; 
var canonfail = [];
var balldados, ballSpritesheet;
var sushi = false;

function preload() {
  creeper = loadImage("./assets/background.gif");
  obsidian = loadImage("./assets/tower.png");
  piratasDados = loadJSON("./assets/boat/boat.json");
  piratasSpritesheet = loadImage("./assets/boat/boat.png");
  afundandoNA = loadJSON("./assets/boat/brokenBoat.json");
  dadosSpritesheet = loadImage("./assets/boat/brokenBoat.png");
  balldados = loadJSON("./assets/waterSplash/waterSplash.json");
  ballSpritesheet = loadImage("./assets/waterSplash/waterSplash.png");
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

var piratasFrames = piratasDados.frames;

for(var i = 0; i < piratasFrames.length; i++){
  var pos = piratasFrames[i].position;
  var img = piratasSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  piratasAnimation.push(img);
}
var afundandoFrames = afundandoNA.frames;

for(var i = 0; i < afundandoFrames.length; i++){
  var pos = afundandoFrames[i].position;
  var img = dadosSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  animando.push(img);
}
var ballFrames = balldados.frames;

for(var i = 0; i < ballFrames.length; i++){
  var pos = ballFrames[i].position;
  var img = ballSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  canonfail.push(img);
}
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
guarana();

for(var i=0;i<bigmac.length;i++){
  coca(bigmac[i],i);
  pepsi(i);
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
    bala.animar();
    if(bala.corpo.position.x>=width||bala.corpo.position.y>=height-50){
      bala.naomostrar(i);
    }
  }
}
function guarana(){
  if(mutiversso.length>0){
  if(mutiversso[mutiversso.length-1]===undefined||mutiversso[mutiversso.length-1].corpo.position.x<width-300){
    var positions=[-40,-60,-70,-20];
    var position=random(positions);
    var piratasdocaribe = new Piratasdocaribe(width, height-60, 170, 170, position, piratasAnimation);
    mutiversso.push(piratasdocaribe)
  }
for(var i=0;i<mutiversso.length;i++){
  if(mutiversso[i]){
  Matter.Body.setVelocity(mutiversso[i].corpo, {x:-0.9,y:0});
  mutiversso[i].mostrar(); 
  mutiversso[i].animar();
  var vecna = Matter.SAT.collides(villager, mutiversso[i].corpo);
  if(vecna.collided && !mutiversso[i].caiu){
    sushi = true;
    hashi();
  }
   }  
}
  }else{
    var piratasdocaribe = new Piratasdocaribe(width, height-60, 170, 170, -60, piratasAnimation);
    mutiversso.push(piratasdocaribe)

  }
}
function pepsi(index){
for(var i=0;i<mutiversso.length;i++){
  if(bigmac[index]!==undefined&&mutiversso[i]!==undefined){
    var avatar=Matter.SAT.collides(bigmac[index].corpo,mutiversso[i].corpo);
    if(avatar.collided){
mutiversso[i].naomostrar(i);
Matter.World.remove(world,bigmac[index].corpo);
delete bigmac[index];
    }
  }
}

}

function hashi(){
  swal({
    title:"Fim de jogo!",
    text: "Obrigado por jogar!",
    imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
    imageSize: "150x150",
    confirmButtonText: "Jogar novamente!"
  },
    function(botaoPressionado){
      if(botaoPressionado){
        location.reload();
      }
    }
  )
}