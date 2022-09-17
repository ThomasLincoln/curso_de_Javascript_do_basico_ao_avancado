//outra formar de criar função, arrow function

const raiz = (n) => {
    return n ** 0.5;
};

//caso só tenha uma linha é possível remover as chaves e o return e se tiver só um parametro pode tirar 
//os paretenteses

const raiz2 = n => n ** 0.5;

//---------------------------------------------------

// //outra forma de criar uma função, função anonima

// const raiz = function(n){
//     return n ** 0.5;
// };
console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

//---------------------------------------------------

// function soma(x, y){
//     const resultado = x + y;
//     return resultado;
// }

// console.log(soma(2,3))


// function saudacao(nome){
//     return `Bom dia ${nome}`;
// }

// const valor = saudacao("Carlos")
// console.log(valor)