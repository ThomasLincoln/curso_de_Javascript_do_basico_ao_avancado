const lista = ['Eduardo', 'Maria', 'Joana'];


// delete remove sem mudar os indices
// .pop remove o ultimo e retorna ele

// const nome1 = lista.pop(); 
// const nome2 = lista.shift();

// console.log(nome1, nome2);




// para adc, usamos push que adc no final
lista.push('Thomas');
console.log(lista)

// podemos também dividir um array

//nesse caso ele começa no 0 e vai até o valor antes do 2
const novo = lista.slice(0, 2)
console.log(novo)

// também podemos usar valores negativos
// nesse caso contém todos menos o ultimo (-1)
const novo1 = lista.slice(0, -1);
console.log(novo1)

// também podemos dividir uma string em vários elementos de um array
const nome = "Thomas Lincoln Victor da Silva"
const nomes = nome.split(" ");
console.log(nomes)