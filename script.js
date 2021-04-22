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

const div = document.querySelector('#humano');
const img = document.createElement('img');
const divPC = document.querySelector('#pc');
const imgPC = document.createElement('img');
const hResult = document.querySelector('#separResult');
const h  = document.createElement('h3');

function escucha(e){
  let source = e.path[0].src; 
  img.src = source;
  img.style.display = 'flex';
  img.style.marginLeft = "105px";
  img.style.marginTop = '75px';
  div.appendChild(img);
  console.log(source);
  
  imgPC.src = computerPlay();
  imgPC.style.display = 'flex';
  imgPC.style.marginLeft = "105px";
  imgPC.style.marginTop = '75px';
  divPC.appendChild(imgPC);
  console.log(imgPC.src);
  playRound();
}

function playRound(){
  let ganador;
  if(img.src === imgPC.src){
    ganador = "EMPATE";
  }
  h.textContent = "El ganador de esta ronda: " + ganador;
  h.style.paddingTop = "25px";
  hResult.appendChild(h);
}

// Función para que la computadora haga su elección

function computerPlay(){
  let ha = Math.floor(Math.random() * pares.length);
  let loop = pares[ha];
  return loop;
}



