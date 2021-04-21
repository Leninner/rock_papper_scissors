// Declaramos variables
const pares = ["Rock", "Paper", "Scissors"];
let contHumano = 0;
let contPc = 0;


// Función para jugar la ronda
// Tenemos las comparativas con el tipo == "value". Esto
// si se puede hacer. OJO!

function playRound(computerSelection, playerSelection){
  computerSelection = computerPlay();
  if(computerSelection == playerSelection){
    alert("Es un empate claro");
  } else if(computerSelection == "papper"){
      if(playerSelection == "scissors"){
        alert("El ganador es el humano");
        contHumano++;
      } else if(playerSelection == "rock"){
        alert("El ganador es la computadora");
        contPc++;
      }
  } else if(computerSelection == "rock"){
    if(playerSelection == "scissors"){
      alert("El ganador es la computadora");
      contPc++;
    } else if(playerSelection == "papper"){
      alert("El ganador es el humano");
      contHumano++;
    }
  } else if(computerSelection == "scissors"){
    if(playerSelection == "papper"){
      alert("El ganador es la computadora");
      contPc++;
    } else if(playerSelection == "rock"){
      alert("El ganador es el humano");
      contHumano++;
    }
  }

  if(contPc == 5){
    alert("EL GRANDIOSO GANADOR ES LA PC!")
  } else if(contHumano == 5){
    alert("EL GRANDIOSO GANADOR ES EL HUMANO!");
  }
}




// Función para que la computadora haga su elección

function computerPlay(){
  let ha = Math.floor(Math.random() * pares.length);
  let loop = pares[ha].toLowerCase();
  return loop;
}

//Código nuevo
const papelito = document.querySelector('#papel');
papelito.addEventListener('click', () => {
  alert("Hola");
});