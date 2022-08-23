// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes signifiativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos CamelCase
// Case-sensitive
// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET

const nome = 'João';
// console.log(nome);

// não se pode modificiar nome
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;


// ver o tipo da var

console.log(typeof(primeiroNumero))