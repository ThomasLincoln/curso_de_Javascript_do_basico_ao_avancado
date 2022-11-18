function Produto(nome, preco){
    this.nome = nome, 
    this.preco = preco
};

Produto.prototype.desconto = function (percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
}



const p1 = new Produto("caneca", 100);


const p2 = {
    nome: 'caramba',
    preco: 10
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(10)
console.log(p2)

