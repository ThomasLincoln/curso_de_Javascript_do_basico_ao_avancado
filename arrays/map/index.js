const numeros = [5,10,30,11,8,2,50,60,89];

const pessoas = [
    {nome: 'Joaquim', idade: 55},
    {nome: 'Thomas', idade: 24},
    {nome: 'Lucas', idade: 14},
    {nome: 'João', idade: 90},
    {nome: 'Carlos', idade: 10},
    {nome: 'Antonio', idade: 12},
    {nome: 'Luiza', idade: 43},
]

const numerosEmDobro = numeros.map((valor) => {
    return valor * 2
});

console.log(numerosEmDobro)

// const nomes = pessoas.map((obj)=>{
//     return obj.nome;
// })

const idades = pessoas.map(obj=>{
    return {idade: obj.idade};
})

const comIds = pessoas.map((obj, indice) =>{
    obj.id = indice
    return obj
})

console.log(comIds)