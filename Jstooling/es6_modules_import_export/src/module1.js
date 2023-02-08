const nome = "Thomas";

const sobrenome = "Lincoln";

const idade = 19;

function soma (x,y){
    return x + y;
}

export {nome, sobrenome, idade, soma}

// podemos exportar também de forma mais direta, segue exemplo
export const cor = "roxo";

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}