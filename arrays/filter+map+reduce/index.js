const numeros = [5,10,30,11,8,2,50,60,89];

// filtrar os pares
// dobrar os valores
// somar tudo

const soma = numeros
.filter((value)=>{return value % 2 === 0;})
.map(value =>{return value * 2;})
.reduce((acumulador, valor)=>{return acumulador + valor;},0)

console.log(soma)