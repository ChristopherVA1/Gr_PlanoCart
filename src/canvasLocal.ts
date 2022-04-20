export class CanvasLocal {
    //atributos
    protected graphics: CanvasRenderingContext2D;
    protected rWidth:number;
    protected rHeight:number;
    protected maxX: number;
    protected maxY: number;
    protected pixelSize: number;
    protected centerX: number;
    protected centerY: number;
    
    public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement, rW : number, rH : number){
      this.graphics = g;
      this.rWidth = rW;
      this.rHeight= rH;
      this.maxX = canvas.width - 1
      this.maxY = canvas.height - 1;
      this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
      this.centerX = this.maxX/2;
      this.centerY = this.maxY/2;
    }
    
    iX(x: number):number{return Math.round(this.centerX + x/this.pixelSize);}
    iY(y: number): number{ return Math.round(this.centerY - y / this.pixelSize); }
    
    drawLine(x1: number, y1: number, x2: number, y2:number) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
      }

      fx(x : number): number{
        return x * x;
      }
     
      paint() {   
        let numHeight : number;
        let numWidth : number;
        let aY : number;
        let aX : number;

        let resY = ((this.rHeight % 2) == 0) ? numHeight = this.rHeight : numHeight = this.rHeight -1;
        let resX = ((this.rWidth % 2) == 0) ? numWidth = this.rWidth : numWidth = this.rWidth -1;
        
        aY = numHeight / 2;
        aX = numWidth / 2;

        /*this.graphics.strokeStyle = 'lightgray';
        for(let g = -aX; g <= aX; g += 0.2){
          g = Number(g.toFixed(1));
          if(!(Number.isInteger(g))){
            this.drawLine(this.iX(g), this.iY(-aY), this.iX(g), this.iY(aY));
          }
        } 
        for(let h = -aY; h <= aY; h += 0.2){
          h = Number(h.toFixed(1));
          if(!(Number.isInteger(h))){
          this.drawLine(this.iX(-aX), this.iY(h), this.iX(aX), this.iY(h));
          }
        }*/

        this.graphics.strokeStyle = 'black';
        this.graphics.fillStyle = 'black';
        for(let i = -aX; i <= aX; i++){
          this.drawLine(this.iX(i), this.iY(-aY), this.iX(i), this.iY(aY)); 
          this.graphics.fillText("" + i,this.iX(i - 0.3), this.iY(-0.3));
        }
        for(let j = -aY; j <= aY; j++){
          this.drawLine(this.iX(-aX), this.iY(j), this.iX(aX), this.iY(j));
          this.graphics.fillText("" + j, this.iX(-0.3), this.iY(j - 0.3));
        }
    }
}