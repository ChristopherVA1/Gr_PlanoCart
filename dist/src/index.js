import { CanvasLocal } from './canvasLocal.js';
let canvas;
let graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
const inputUno = document.querySelector('.ValorX');
const inputDos = document.querySelector('.ValorY');
function obtenerValores() {
    limpiarCanvas();
    let valueUno = parseInt(inputUno.value);
    let valueDos = parseInt(inputDos.value);
    valueUno = valueUno;
    valueDos = valueDos;
    const miCanvas = new CanvasLocal(graphics, canvas, valueUno, valueDos);
    miCanvas.paint();
}
function limpiarCanvas() {
    graphics.clearRect(0, 0, canvas.width, canvas.height);
}
function dibujoPorDefecto() {
    let valorUnoInicial = 10;
    let valorDosInicial = 10;
    const miCanvas = new CanvasLocal(graphics, canvas, valorUnoInicial, valorDosInicial);
    miCanvas.paint();
}
dibujoPorDefecto();
document.getElementById('BtnCrear').addEventListener('click', obtenerValores, false);
