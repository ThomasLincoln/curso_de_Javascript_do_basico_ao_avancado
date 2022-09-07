//primeiro vamos pegar o evento de submit

const form = document.querySelector(".formulario")

form.addEventListener('submit', function (event){
    event.preventDefault();
    
    const inputPeso = event.target.querySelector("#input-peso");
    const inputAltura = event.target.querySelector("#input-altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(isNaN(peso)){
        setResultado("peso inválido", false);
        return;
    }
    if(isNaN(altura)){
        setResultado("altura inválida", false);
        return;
    }

    const imc = getIMC(peso, altura);
    const situacaoImc = getSituacao(imc);

    const mensagemImc = `Seu IMC é ${imc} e sua situação é ${situacaoImc}`;

    setResultado(mensagemImc, true);
})

function getSituacao(imc){
    const situacao = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];


    if(imc < 18.5){
       return situacao[0];
    }else if (imc > 18.5 && imc <= 24.9){
        return situacao[1];
    }else if (imc > 25 && imc <= 29.9){
       return situacao[2]; 
    }else if (imc > 30 && imc <= 34.9){
       return situacao[3];
    }else if (imc > 35 && imc <= 39.9){
       return situacao[4];
    }else if (imc > 40){
       return situacao[5];
    }
}

function getIMC(peso, altura){
    return (peso/altura ** 2).toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    // p.classList.add('paragrafo-resultado')
    return p;
}

function setResultado(mensagem, isValid){
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = '';
    const p = criaP();
    if(isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }
 
    p.innerHTML = mensagem;
    resultado.appendChild(p);
}