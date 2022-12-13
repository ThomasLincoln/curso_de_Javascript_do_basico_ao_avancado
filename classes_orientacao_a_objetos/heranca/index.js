class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + " já está ligado");
            return;
        }else{
            this.ligado = true;
        }
    }
    desligar(){
        if(!this.ligado){
            console.log(this.nome + " já está desligado");
            return;
        }else{
            this.ligado = false;
        }
    }
}

// agora como criar uma classe que herda dessa anterior?

class smarthphone extends DispositivoEletronico{
    constructor(nome, cor){
        // caso voce precise adcionar mais atributos, vc precisa chamar o super para chamar a classe
        // com os atributos dele
        super(nome);
        this.cor = cor;
    }
}

const s1 = new smarthphone("iphone");

console.log(s1)