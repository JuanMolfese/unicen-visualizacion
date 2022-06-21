class Ficha {
  
    constructor(color,height,width,posX,posY,id,ctx){
        this.color = color;
        this.height = height;
        this.width = width;
        this.posX = posX;
        this.posY = posY;
        this.id = id;
        this.lineWidth = 3;
        this.ctx = ctx;
    }
  
    draw() {
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.fillRect(this.posX,this.posY,this.height,this.width);
    }
    
    isClicked(x,y) {
        return ((x >= this.posX && x <= this.posX + this.width) && (y >= this.posY && y <= this.posY + this.height));
    }
}