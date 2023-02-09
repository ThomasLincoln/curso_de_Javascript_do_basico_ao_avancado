export default function geraResposta(checkboxes, tipos, tamanho) {
    let resposta = "";
    for (let i = 0; i < tamanho; i++) {
      let numeroRandom = Math.floor(Math.random() * 3);
      if (!checkboxes[numeroRandom]) {
        while (!checkboxes[numeroRandom]) {
          numeroRandom = Math.floor(Math.random() * 3);
        }
      }
      // console.log(tipos[numeroRandom]())
      resposta += tipos[numeroRandom]();
  }
  return resposta;
  
    // console.log(numero, letra, symbol);
  }