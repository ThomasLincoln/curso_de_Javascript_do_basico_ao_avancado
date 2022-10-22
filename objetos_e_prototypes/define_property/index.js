function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // permite mostrar ou não a chafe
        value: estoque, // define o valor
        writable: false, // permite ser editável ou não
        configurable: true // pode apagar ou reconfigurar ela
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)