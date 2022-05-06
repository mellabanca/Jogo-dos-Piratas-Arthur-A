class Golem {
    constructor(posX, posY, lar, alt, ang){
        this.posX = posX;
        this.posY = posY;
        this.lar = lar;
        this.alt = alt;
        this.ang = ang;
        this.bas = loadImage("./assets/cannonBase.png");
        this.can = loadImage("./assets/canon.png");
    }
    mostrar(){
        push();
imageMode(CENTER);
image(this.can,this.posX,this.posY,this.lar,this.alt);
        pop();
        image(this.bas,70,20,200,200);
        noFill();
    }
}