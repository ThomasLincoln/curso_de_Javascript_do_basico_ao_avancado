function Produto(nome, preco, estoque){
    
    Object.defineProperties(this,{
        nome:{
            enumerable: true,
            value:nome,
        },
        preco:{
            enumerable: true,
            value: preco

        },
        estoque:{
            enumerable: true,
            value: estoque
        }
    })

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)