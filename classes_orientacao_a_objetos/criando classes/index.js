// é identico a função construtora

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log("falando");
    }
}


// a class ja coloca direto as funções no prototype, com isso não precisamos fazer tudo aquilo de criar
// os métodos no prototype, ele faz direto, assim, nenhum dos objetos cria o método falar, 
// eles apenas usam o método do pai
const p1 = new Pessoa("Thomas", "Lincoln");
const p2 = new Pessoa("Jonas", "Lincoln");
const p3 = new Pessoa("Joao", "Lincoln");
const p4 = new Pessoa("Joana", "Lincoln");