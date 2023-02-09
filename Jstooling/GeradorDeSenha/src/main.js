import geraNumero from "./modules/geraNumero";
import geraLetra from "./modules/geraLetra";
import geraSimbolo from "./modules/geraSimbolo";
import geraResposta from "./modules/geraResposta";
import "./assets/css/style.css";

const resultadoDiv = document.querySelector(".senha");
const btnGera = document.querySelector(".gerar");
const checkNumb = document.querySelector("#numb");
const checkLetter = document.querySelector("#letras");
const checkSymb = document.querySelector("#symb");
const tipos = [geraNumero, geraLetra, geraSimbolo];

btnGera.addEventListener("click", (e) => {
  e.preventDefault();
  const tamanho = document.querySelector("#tam").value;
  // verificar as variaveis
  //tamanho
  // checkbox's
  const numero = checkNumb.checked;
  const letra = checkLetter.checked;
  const symbol = checkSymb.checked;
  let array = [numero, letra, symbol];
  
  if(!tamanho){
    resultadoDiv.innerHTML = "Tamanho inválido";
  }else if (!numero && !letra && !symbol) {
          resultadoDiv.innerHTML = "Selecione uma checkbox";
  } else {
    const resposta = geraResposta(array, tipos, tamanho);
    resultadoDiv.innerHTML = resposta;
  }
});


