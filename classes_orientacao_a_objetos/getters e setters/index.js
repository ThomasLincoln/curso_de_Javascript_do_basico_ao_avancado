const _velocidade = Symbol('velocidade');
// usamos isso para não podermos alterar o valor de fora


class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        if (valor !== 'number') return;
        if (valor >= 100 || valor <=0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade]  >= 100) return;
        this[_velocidade] ++;
    }
    freiar(){
        if(this[_velocidade]  <= 100) return;
        this[_velocidade] --;
    }
}

const c1 = new Carro('fusca');

for (let i = 0; i <=200; i++){
    c1.acelerar()
}

console.log(c1);


class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        return this.nome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }
}

const p1 = new Pessoa("Thomas", "lincoln");
console.log(p1.falar())
console.log(p1.nomeCompleto)