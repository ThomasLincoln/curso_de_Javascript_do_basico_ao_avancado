/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
atribuir primitivos é como fazer uma cópia

Referência - Arrays, Object, Function
atribuir variaveis por referencia faz ambas apontarem para o mesmo local na memória
*/

//------------------------------------------------------------------

//referencia
let a = [1,2,3];
let b = a;
let c = [...a]; // assim realmente copiamos
// nesse caso ele funciona como um ponteiro, ambas variaveis apontam pro mesmo local na memória

console.log(a, b)

//------------------------------------------------------------------

//primitivo
// let nome = 'Thomas';
// nome = 'Otávio'
// nome[0] = 'R' //não funciona
// console.log(nome)