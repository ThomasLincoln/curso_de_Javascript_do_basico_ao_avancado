function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof(msg) !== "string"){
            reject(false);
            return
        }
        
        setTimeout(()=>{
            // console.log(msg);
            resolve(msg.toUpperCase() + " passei na promisse");
            return;
        }, tempo);
    });
}


// promise.all promise.race 


// testa todas as promessas, e se uma rejeitar, ele rejeita todas
const promises = [
    // "primeiro valor",
    esperaAi("promisse 1", 3000),
    esperaAi("promisse 2", 500),
    esperaAi("promisse 3", 1000),
    // esperaAi(1000, 1000),
    // "Outro valor"
]

// Promise.all(promises)
//     .then((valor)=>{
//         console.log(valor)
//     })
//     .catch((e)=>{
//         console.log(e)
//     })


// entrega a primeira promisse completa, se tiver algo que não seja uma promisse, ele 
// entrega isso
// Promise.race(promises)
//     .then((valor)=>{
//         console.log(valor)
//     })
//     .catch((e)=>{
//         console.log(e)
//     })
