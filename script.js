// Declaramos variables
const pares = new Array();
pares[0] = "sources/paper.png"
pares[1] = "sources/rock.png";
pares[2] = "sources/scissors.png";
let contHumano = 0;
let contPc = 0;


//Eventos de Escucha

const papelito = document.querySelector('#papel');
papelito.addEventListener('click', escucha);

const roquita = document.querySelector('#roca');
roquita.addEventListener('click', escucha);

const tijerita = document.querySelector('#tijeras');
tijerita.addEventListener('click', escucha);


//Código nuevo

//Traemos el elemento de HTML con selectores de consulta
// y creamos un nuevo elemento
const div = document.querySelector('#humano');
const img = document.createElement('img');
const divPC = document.querySelector('#pc');
const imgPC = document.createElement('img');
const hResult = document.querySelector('#separResult');
const h  = document.createElement('h3');
const resultHumano = document.querySelector('#resultHumano');
const resultPC = document.querySelector('#resultPC');

function escucha(e){
  let source = e.path[0].src; 
  img.src = source;
  img.style.display = 'flex';
  img.style.marginLeft = "105px";
  img.style.marginTop = '75px';
  //Agregamos la imagen del humano a la caja de selección humano
  div.appendChild(img);
  console.log(source);
  
  imgPC.src = computerPlay();
  imgPC.style.display = 'flex';
  imgPC.style.marginLeft = "105px";
  imgPC.style.marginTop = '75px';
  //Agregamos la imagen de la PC a la caja de selección PC
  divPC.appendChild(imgPC);
  console.log(imgPC.src);
  playRound();
}

//Funcion para jugar rondas
function playRound(){
  let ganador;
  if(img.src === imgPC.src){
    ganador = "EMPATE";
  }
  else if(imgPC.src == 'https://leninner.github.io/rock_papper_scissors/sources/paper.png'){
    if(img.src == 'https://leninner.github.io/rock_papper_scissors/sources/scissors.png'){
      ganador = 'ERES TÚ!';
      contHumano++;
    }
    else if(img.src == 'https://leninner.github.io/rock_papper_scissors/sources/rock.png'){
      ganador = 'ES LA PC!';
      contPc++;
    }
  }
  else if(imgPC.src == 'https://leninner.github.io/rock_papper_scissors/sources/rock.png'){
    if(img.src == 'https://leninner.github.io/rock_papper_scissors/sources/scissors.png'){
      ganador = "ES LA PC!";
      contPc++;
    }
    else if(img.src == 'https://leninner.github.io/rock_papper_scissors/sources/paper.png'){
      ganador = "ERES TÚ!";
      contHumano++;
    }
  }
  else if(imgPC.src == 'https://leninner.github.io/rock_papper_scissors/sources/scissors.png'){
    if(img.src == 'https://leninner.github.io/rock_papper_scissors/sources/paper.png'){
      ganador = "ES LA PC!";
      contPc++;
    }
    else if(img.src == 'https://leninner.github.io/rock_papper_scissors/sources/rock.png'){
      ganador = "ERES TÚ!";
      contHumano++;
    }
  }
  h.textContent = "El ganador de esta ronda: " + ganador;
  h.style.paddingTop = "25px";
  //Agregamos el resultado a la caja de resultado
  hResult.appendChild(h);
  resultHumano.textContent = contHumano;
  resultPC.textContent = contPc;
  if(contPc == 5){ 
    alert('GANÓ LA COMPUTADORA');
  }
  else if(contHumano == 5){
    alert('GANASTE TÚ!');
  }
}

// Función para que la computadora haga su elección

function computerPlay(){
  let ha = Math.floor(Math.random() * pares.length);
  let loop = pares[ha];
  return loop;
}



