const produto = {nome: 'caneca', preco: 1.8};

// para copiarmos um objeto para outra váriavel fazemos assim
const caneca = {
    ...produto,
    material: 'porcelana'
};
caneca.nome = 'outra coisa';

// outra forma de copiar é usada como
const objeto = Object.assign({}, produto, {material: 'porcelanato'})
console.log(caneca, produto, objeto);


// se quisermos bloquar um objeto de ser alterado
// nada será alterado
Object.freeze(produto);

//pegar a descrição das propriedades

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// pegar só os valores do objeto
console.log(Object.values(produto))

// pegar todos os valores e propriedades em um array
console.log(Object.entries(produto))



