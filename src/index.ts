import { CanvasLocal } from './canvasLocal.js';
let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;
canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');



const miCanvas:CanvasLocal = new CanvasLocal(graphics, canvas);

miCanvas.paint();

/*
Funciones para crear plano carteciano

const inputX = <HTMLInputElement>document.querySelector('.ValorX');
const inputY = <HTMLInputElement>document.querySelector('.ValorY');

function IngresarDatos(){
    limpiar();
    let valueX = parseInt(inputX.value);
    let valueY = parseInt(inputY.value);
        valueX = valueX;
        valueY = valueY;

    const miCanvas:CanvasLocal = new CanvasLocal(graphics, canvas, valueX, valueY);
    miCanvas.paint();
}
function limpiar(){
    graphics.clearRect(0, 0, canvas.width, canvas.height);
}
function canvasEj(){
    let valorUnoInicial = 10;
    let valorDosInicial = 10;
    const miCanvas : CanvasLocal = new CanvasLocal(graphics, canvas, valorUnoInicial, valorDosInicial);
    miCanvas.paint(); 
}
canvasEj();
document.getElementById('BtnCrear').addEventListener('click', IngresarDatos, false);
*/


/*
botones para plano
 <div class="Contenedores">
            <label for="" class="labelX">Ingrese valor para X:</label>
            <input type="number" class="ValorX">
            <label for="" class="labelY">Ingrese valor para Y:</label>
            <input type="number" class="ValorY">
            <button id="BtnCrear">Crear</button>
          </div> 
          */