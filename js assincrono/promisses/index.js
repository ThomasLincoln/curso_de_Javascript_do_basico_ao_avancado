function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof(msg) !== "string"){
            reject("BAD VALUE");
        }
        
        setTimeout(()=>{
            // console.log(msg);
            resolve(msg);
        }, tempo);
    });
}

esperaAi('frase 1', aleatorio(1, 3))
    .then((resposta) => {
        console.log(resposta)
        return esperaAi(2, aleatorio(1, 3))
    })
    .then((resposta)=>{
        console.log(resposta)
        return esperaAi('frase 3', aleatorio(1, 3))
    })
    .then((resposta)=>{
        console.log(resposta)
        })
    .catch((e)=>{
        console.log("erro ", e);
    })
// esperaAi('frase 3', aleatorio(1, 3))



// promisses são usadas para que só seja permitido executar uma função depois que 
// outra terminar

// nas promisses vc recebe dois parametros, um que é usado para quando vc qr resolver
// uma promisse e poder passar para a próxima e uma para rejeitar totalmente a cadeia
// da promisse atual