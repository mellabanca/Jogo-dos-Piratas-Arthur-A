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
        if(keyIsDown(RIGHT_ARROW)&&this.ang<70){
            this.ang+=1;
        }
        if(keyIsDown(LEFT_ARROW)&&this.ang>-30){
            this.ang-=1;
        }
        push();
        translate(this.posX,this.posY);
        rotate(this.ang);
imageMode(CENTER);
image(this.can,0,0,this.lar,this.alt);
        pop();
        image(this.bas,70,20,200,200);
        noFill();
    }
}