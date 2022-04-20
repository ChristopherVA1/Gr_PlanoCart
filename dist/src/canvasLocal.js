export class CanvasLocal {
    constructor(g, canvas, rW, rH) {
        this.graphics = g;
        this.rWidth = rW;
        this.rHeight = rH;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
    }
    iX(x) { return Math.round(this.centerX + x / this.pixelSize); }
    iY(y) { return Math.round(this.centerY - y / this.pixelSize); }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
    fx(x) {
        return x * x;
    }
    paint() {
        let numHeight;
        let numWidth;
        let aY;
        let aX;
        let resY = ((this.rHeight % 2) == 0) ? numHeight = this.rHeight : numHeight = this.rHeight - 1;
        let resX = ((this.rWidth % 2) == 0) ? numWidth = this.rWidth : numWidth = this.rWidth - 1;
        aY = numHeight / 2;
        aX = numWidth / 2;
        this.graphics.strokeStyle = 'black';
        this.graphics.fillStyle = 'black';
        for (let i = -aX; i <= aX; i++) {
            this.drawLine(this.iX(i), this.iY(-aY), this.iX(i), this.iY(aY));
            this.graphics.fillText("" + i, this.iX(i - 0.3), this.iY(-0.3));
        }
        for (let j = -aY; j <= aY; j++) {
            this.drawLine(this.iX(-aX), this.iY(j), this.iX(aX), this.iY(j));
            this.graphics.fillText("" + j, this.iX(-0.3), this.iY(j - 0.3));
        }
    }
}
