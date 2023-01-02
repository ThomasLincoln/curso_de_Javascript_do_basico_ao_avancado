function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{        
        setTimeout(()=>{
            if(typeof(msg) !== "string"){
                reject("CAI NO ERRO");
                return
            }
            // console.log(msg);
            resolve(msg.toUpperCase() + " passei na promisse");
            return;
        }, tempo);
    });
}

async function executa(){

    try{

        const fase1 = await esperaAi("Fase 1", aleatorio(0,3));
        console.log(fase1);
        const fase2 = await esperaAi(1, aleatorio(0,3));
        console.log(fase2);
        const fase3 = await esperaAi("Fase 3", aleatorio(0,3));
        console.log(fase3);
    }
    catch(erro){
        console.log(erro)
    }
}

executa();