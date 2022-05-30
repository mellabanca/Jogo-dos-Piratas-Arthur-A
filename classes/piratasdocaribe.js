class Piratasdocaribe {
    constructor(posX, posY, lar, alt, piratasPos, piratasAnimation){
        this.corpo = Bodies.rectangle(posX, posY, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.piratasPos = piratasPos;
        this.imagem = loadImage("./assets/boat.png");
        this.animacao = piratasAnimation;
        this.speed = 0.05;
        World.add(world,this.corpo);
    }

    animar(){
        this.speed += 0.05;
    }

    mostrar(){
        var pos = this.corpo.position;
        var ang = this.corpo.angle;
        var index = floor(this.speed % this.animacao.length);

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.animacao[index], 0, this.piratasPos, this.lar, this.alt);
        pop();
    }
    naomostrar(index){
        setTimeout(()=>{
            Matter.World.remove(world,mutiversso[index].corpo);
            delete mutiversso[index];
        },2000)

    }
}