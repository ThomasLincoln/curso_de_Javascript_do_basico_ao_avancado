function escopo() {
    const form = document.querySelector(".formulario")


    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = document.querySelector("#input-peso").value;
        const altura = document.querySelector("#input-altura").value;
        const resposta = document.querySelector(".resposta");
        
        // console.log(peso, altura)

        if (isNaN(peso) && isNaN(altura)) {
            resposta.innerHTML = "Os valores do peso e altura são inválidos"
        }
        else if(isNaN(peso)){
            resposta.innerHTML = "O valor de peso é inválido"
        }else if(isNaN(altura)){
            resposta.innerHTML = "O valor de altura é inválido"
        }

        if(!isNaN(peso) && !isNaN(altura)){
            const IMC = peso / (altura ** altura);
            if(IMC < 18.5){
                resposta.innerHTML = `O seu imc é ${IMC.toFixed(2)} e você está abaixo do peso ideal`
            }else if (IMC > 18.5 && IMC <= 24.9){
                resposta.innerHTML = `O seu imc é ${IMC.toFixed(2)} e você está no peso ideal`
            }else if (IMC > 25 && IMC <= 29.9){
                resposta.innerHTML = `O seu imc é ${IMC.toFixed(2)} e você está com sobrepeso`
            }else if (IMC > 30 && IMC <= 34.9){
                resposta.innerHTML = `O seu imc é ${IMC.toFixed(2)} e você está com obesidade grau 1`
            }else if (IMC > 35 && IMC <= 39.9){
                resposta.innerHTML = `O seu imc é ${IMC.toFixed(2)} e você está com obesidade grau 2`
            }else if (IMC > 40){
                resposta.innerHTML = `O seu imc é ${IMC.toFixed(2)} e você está com obesidade grau 3`
            }
            // console.log(IMC)
        }
    }
    form.addEventListener('submit', recebeEventoForm);

}

escopo();