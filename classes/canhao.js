class Canhao {
    constructor(posX, posY){
        var options = {
            isStatic: true
        }
        this.r = 30;
        this.corpo = Bodies.circle(posX, posY, this.r, options);
        this.imagem = loadImage("./assets/cannonball.png");
        this.batatafrita=[];
        World.add(world,this.corpo);
    }
receba(){
    var novoAng = witer.ang - 28;
    novoAng *= (3.14/180);
    var velocidade = p5.Vector.fromAngle(novoAng);
    velocidade.mult(0.5);

    Matter.Body.setStatic(this.corpo,false);
    Matter.Body.setVelocity(this.corpo,{x:velocidade.x * (180/3.14),y:velocidade.y * (180/3.14)});
}
    mostrar(){
        var pos = this.corpo.position;
        push();
        imageMode(CENTER);
        image(this.imagem, pos.x, pos.y, this.r, this.r);
        pop();
        if(this.corpo.velocity.x>0&&pos.x>10){
            var position=[pos.x,pos.y]
         this.batatafrita.push(position);
        }
        for(var i=0;i<this.batatafrita.length;i++){
         image(this.imagem,this.batatafrita[i][0],this.batatafrita[i][1],5,5);
        }
    }
    naomostrar(index){
        Matter.Body.setVelocity(this.corpo,{x:0,y:0});
        setTimeout(()=>{
            Matter.World.remove(world,this.corpo);
            delete bigmac[index];
        },1000)

    }
}