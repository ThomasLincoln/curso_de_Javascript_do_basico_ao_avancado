const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let seg = 0
let min = 0
let hr = 0
let timer;
let data = new Date()

function numeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

iniciar.addEventListener('click', function(event){
    controladora('contar')
});

pausar.addEventListener('click', function(event){

    controladora('parar')
});

zerar.addEventListener('click', function(event){
    controladora('zerar')
});



function mostraHora(data){
    let hora = numeroAEsquerda(data.getHours())
    let minuto = numeroAEsquerda(data.getMinutes())
    let segundo = numeroAEsquerda(data.getSeconds())
    return `${hora}:${minuto}:${segundo}`
}



function controladora(acao){
    if(acao == 'contar'){
        clearInterval(timer)
        contar()
        relogio.style.color = 'white'
    }else if(acao == 'zerar'){
        clearInterval(timer)
        hr = 0; seg = 0; min = 0;
        relogio.textContent = '00:00:00'
        relogio.style.color = 'white'
    }else if(acao == 'parar'){
        clearInterval(timer)
        relogio.style.color = 'red'
    }
}

function attHora(segundo){
    if(hr == 23 && min == 59 && segundo == 58){
        parar()
    }
    if(segundo<59){
        segundo++
    }else if(min < 59){
        min++
        segundo = 0
    }else{
        hr++
        min = 0
        segundo = 0
    }
    let data = new Date(`2020-12-20 ${hr}:${min}:${segundo}`)
    return data

}

function contar(){
    timer = setInterval(function(){
        dataAgora = attHora(seg)
        console.log(mostraHora(dataAgora))
        relogio.textContent = mostraHora(dataAgora)
        seg++
    }, 1000)
}

