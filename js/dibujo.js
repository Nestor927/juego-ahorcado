

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.height = 0;

/* const bodyParts =[
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
]; */

function head(){
    ctx.arc(44,10,5,0,2*Math.PI,true);
    ctx.fill();
    ctx.stroke();
}
function hBody(){
    colorCtx()
    ctx.fillRect(44,15,1,20);
}
function armLeft(){
    ctx.fillRect(37,18,7,1);
    ctx.fillRect(37,18,1,7);
}
function armRigth(){
    ctx.fillRect(44,18,7,1);
    ctx.fillRect(51,18,1,7);
}
function  legLeft(){
    ctx.fillRect(37,34,7,1);
    ctx.fillRect(37,34,1,7);
}
function legRigth(){
    ctx.fillRect(44,34,7,1);
    ctx.fillRect(51,34,1,7);
}
/* let selectedWord;
let usedLetters; */
let mistakes;
let hits;

function clock(){
    number = 3;
    const timer = setInterval(()=>{
        number--;
        if(number == 0){
            clearInterval(timer);
            winner();
        }
    },100);
}
/* const addBodyPart = bodyPart => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(...bodyPart);
} */
function winner(){
    alert('GANASATE');
    refresh();
}
const endGame = () => {
    alert('Perdiste la palabra era: '+palabraSecreta);
    refresh();
}
function refresh(){
    location.href = location.href;
}
function colorCtx(){
    ctx.fillStyle = '#000';
}
const drawHangMan = () => {
    

    ctx.canvas.width =290;
    ctx.canvas.height = 230;
    ctx.scale(5, 5);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.fillStyle = '#0A3871'
    ctx.fillRect(10, 45, 25, 1);
    ctx.fillRect(20, 0, 1, 45);
    ctx.fillRect(20, 0, 25, 1);
    ctx.fillRect(44, 1, 1, 10);
    
}
const startGame = () => {
    console.log(palabras)
    usedLetters =[];
    mistakes = 0;
    hits = 0;
    drawHangMan();
    starButton.style.display = 'none';
    /* addButton.style.display = 'none'; */
    /* agregar.style.display = 'none'; */
    dibujarLineas(escojerPalabraSecreta())
}
starButton.addEventListener('click', startGame);