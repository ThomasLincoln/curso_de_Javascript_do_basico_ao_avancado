const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function numeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
let seg = 0
let min = 0
let hr = 0

pausar.addEventListener('click', function(event){
    relogio.style.color = 'red'
    parar()
});

iniciar.addEventListener('click', function(event){
        contar(seg,min, hr )
});


zerar.addEventListener('click', function(event){
    seg = 0;
    min = 0;
});



function mostraHora(data){
    let hora = numeroAEsquerda(data.getHours())
    let minuto = numeroAEsquerda(data.getMinutes())
    let segundo = numeroAEsquerda(data.getSeconds())
    return `${hora}:${minuto}:${segundo}`
    
}



function contar(seg, min, hr){
    setInterval(function(){
        if(hr == 23 && min == 59 && seg == 58){
            parar()
        }
        if(seg<59){
            seg++
        }else if(min < 59){
            min++
            seg = 0
        }else{
            hr++
            min = 0
            seg = 0
        }
        let data = new Date(`2020-12-20 ${hr}:${min}:${seg}`)
        console.log(mostraHora(data))
        relogio.textContent = mostraHora(data)
    }, 1000)
}
