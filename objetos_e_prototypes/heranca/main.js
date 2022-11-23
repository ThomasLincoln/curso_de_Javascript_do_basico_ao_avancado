
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); //vc usa this dentro para passar os valores para dentro da camiseta
    this.cor = cor;
}

// para poder ter o prototype do produto na camiseta precisamos fazer isso
Camiseta.prototype = Object.create(Produto.prototype);
// precisamos dessa linha para poder resolver o problema de camiseta usar o construtor de produto
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 6.8, 'Preta');
camiseta.aumento(10);
console.log(camiseta);

// Dessa formas nós temos algo parecido com uma herança, pois camiseta irá ser gerado pelo construtor
// Camiseta que usa o construtor Produto, assim, herdando tudo, porém, na verdade é feita uma
// deleação pois 


function Caneca (nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get:function(){
            return estoque;
        }, 
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca1 = new Caneca('xmen', 20.00, 'plástico' , 2);

caneca1.estoque = 10
console.log(caneca1);