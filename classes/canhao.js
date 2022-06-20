class Canhao {
    constructor(posX, posY){
        var options = {
            isStatic: true
        }
        this.r = 30;
        this.corpo = Bodies.circle(posX, posY, this.r, options);
        this.imagem = loadImage("./assets/cannonball.png");
        this.batatafrita=[];
        this.speed = 0.05;
        this.animacao = [this.imagem];
        this.deupt = false;
        World.add(world,this.corpo);
    }
    animar(){
        this.speed += 0.05;
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
        var angle = this.corpo.angle;
        var pos = this.corpo.position;
        var index = floor(this.speed % this.animacao.length);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animacao[index], 0, 0, this.r, this.r);
        pop();
        if(this.corpo.velocity.x>0 && pos.x>10 && !this.deupt){
            var position=[pos.x,pos.y]
         this.batatafrita.push(position);
        }
        for(var i=0;i<this.batatafrita.length;i++){
         image(this.imagem,this.batatafrita[i][0],this.batatafrita[i][1],5,5);
        }
    }
    naomostrar(index){
        this.deupt = true;
        Matter.Body.setVelocity(this.corpo,{x:0,y:0});
        this.animacao = canonfail;
        this.speed = 0.05;
        this.r = 150;
        setTimeout(()=>{
            Matter.World.remove(world,this.corpo);
            delete bigmac[index];
        },1000)

    }
}