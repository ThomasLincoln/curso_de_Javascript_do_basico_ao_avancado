// filter, muito usado
const numeros = [5,10,30,11,8,2,50,60,89];


// let maiorq10 = []
// for(let numero of numeros){
//     if(numero> 10){
//         maiorq10.push(numero);
//     }
// }

// console.log(maiorq10)

const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados)



const pessoas = [
    {nome: 'Joaquim', idade: 55},
    {nome: 'Thomas', idade: 24},
    {nome: 'Lucas', idade: 14},
    {nome: 'João', idade: 90},
    {nome: 'Carlos', idade: 10},
    {nome: 'Antonio', idade: 12},
    {nome: 'Luiza', idade: 43},
]

const pessoasNomeGrande = pessoas.filter(obj=> obj.nome.length >= 5);

const idosos = pessoas.filter((obj)=>{
    return obj.idade > 50;
});

const terminaComA = pessoas.filter(obj =>{
    return obj.nome.toLowerCase().endsWith('a');
})
console.log(terminaComA)