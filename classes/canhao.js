class Canhao {
    constructor(posX, posY){
        var options = {
            isStatic: true
        }
        this.r = 30;
        this.corpo = Bodies.circle(posX, posY, this.r, options);
        this.imagem = loadImage("./assets/cannonball.png");
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
    }
}