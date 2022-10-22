// get pega o valor e set configura ele

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // permite mostrar ou não a chafe
        configurable: true, // pode apagar ou reconfigurar ela

        get: ()=>{
            return estoquePrivado;
        },

        set:function(valor){
            if(typeof valor !== 'number'){
                console.log('bad value');
                return
            }
            estoquePrivado = valor;
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'opa'
console.log(p1)