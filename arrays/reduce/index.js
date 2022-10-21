// map, filter e reduce em uma só, mas não é o ideal

const numeros = [5,10,30,11,8,2,50,60,89];

//supondo que queremos somar todos os valores

const total = numeros.reduce((acumulador, valor, indice, array) =>{
    acumulador += valor;
    console.log(acumulador, valor)
    return acumulador
},0);