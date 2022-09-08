//primeiro vamos capturar onde será registrado a data

const h1Data = document.querySelector('.hora');
h1Data.innerHTML = 'olá mundo'

const data = new Date();

function getDiaSemama(data) {
    const diaDaSemana = data.getDay();
    switch (diaDaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sábado";
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function getDia(data){
    return data.getDate()
}

function getMes(data){
    const mesNumero = data.getMonth()
    switch(mesNumero){
        case 0:
            return "Janeiro";
        case 1: 
            return "Fevereiro";
        case 2:
            return "Março";
        case 3:
            return "Abril";
        case 4: 
            return "Maio";
        case 5: 
            return "Junho";
        case 6: 
            return "Julho";
        case 7: 
            return "Agosto";
        case 8: 
            return "Setembro";
        case 9: 
            return "Outubro";
        case 10: 
            return "Novembro";
        case 11: 
            return "Dezembro";       
    }
}

const diaDaSemana = getDiaSemama(data);
const dia = getDia(data);
const mes = getMes(data);
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();

h1Data.innerHTML = `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minutos}`;


