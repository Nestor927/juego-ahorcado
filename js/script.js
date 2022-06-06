var palabras = ['ALURA', 'AHORCADO', 'ORACLE', 'HTML', 'CSS', 'JAVASCRIPT']
var tablero = document.getElementById('horca').getContext('2d');
var letras = [];
var palabraCorrecta = "";
var palabraSecreta ='';
var errores = 9;
tablero.canvas.width =0;
tablero.canvas.height = 0;
/* /////////////////////// */
function addElement(){
   
    
    
    startGame();
}



/* //////////////////////// */


function escojerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabra;
    console.log(palabra);
    return palabraSecreta
}

    function dibujarLineas(){
        tablero.canvas.width =700;
        tablero.canvas.height = 240;
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.strokeStyle = "#0A3871";
        tablero.beginPath();

        var ancho=600/palabraSecreta.length;
        for(let i = 0; i < palabraSecreta.length; i++){
            tablero.moveTo(5+(ancho*i),100)
            tablero.lineTo(55+(ancho*i),100)
        }
        tablero.stroke()
        tablero.closePath()
    } 
    /* dibujarLineas(escojerPalabraSecreta()) */

    function escribirLetraCorrecta(index){
        tablero.font = 'bold 52px Inter'
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#0A3871";
        var ancho=600/palabraSecreta.length
        tablero.fillText(palabraSecreta[index],10+(ancho*index),80)
    }
    function escribirLetraIncorrecta(letra, errorsLeft){
        tablero.font = 'bold 40px Inter'
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#0A3871";

        tablero.fillText(letra, 35+(40*(10-errorsLeft)), 160,40)
    }
    function verificarLetraClicada(key){
        if (letras.length < 1 || letras.indexOf(key) < 0){
            letras.push(key)
            return false
        }
        else{
            letras.push(key)
            return true
        }
    
    }

    function adicionarLetraCorrecta(i){
        palabraCorrecta += palabraSecreta[i].toUpperCase()
        
    }

    function adicionarLetraIncorrecta(letter){
        if(palabraSecreta.indexOf(letter) <=0){
            errores-=1;
            mistakes +=1 ;
            
        }
    }

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase()
        if(!verificarLetraClicada(e.key)){
            if(palabraSecreta.includes(letra)){
                console.log(letra)
                adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
                
                for(let i=0; i<palabraSecreta.length; i++){
                    if(palabraSecreta[i]===letra){
                        escribirLetraCorrecta(i)
                        hits += 1;
                    }
                }
                console.log(hits);
                if(hits == palabraSecreta.length){
                    clock();
                    
                }
            }else{
                if(!verificarLetraClicada(e.key)) return
                adicionarLetraIncorrecta(letra)
                escribirLetraIncorrecta(letra, errores)
                
                if(mistakes == 1){
                    head();
                }
                if(mistakes == 2){
                    hBody();
                }
                if(mistakes == 3){
                    armLeft();
                }
                if(mistakes == 4){
                    armRigth();
                }
                if(mistakes == 5){
                    legLeft();
                }
                if(mistakes == 6){
                    legRigth();
                }
                if(mistakes == 7){
                    endGame();
                }
                
                
            }
        }
    };
    