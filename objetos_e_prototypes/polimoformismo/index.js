// Superclass 

function Conta(agencia, conta, saldo){
    this.agencia = agencia,
    this.conta = conta,
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente ${this.saldo}`);
        return
    }
    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function(){
    console.log(`Agencia/Conta: ${this.agencia}/${this.conta}` + `| Saldo: R$ ${this.saldo.toFixed(2)}`);
}

const conta1 = new Conta(11, 22, 10);
// console.log(conta1);
conta1.depositar(20);
conta1.depositar(22);
conta1.sacar(100);

// agora que criamos uma super classe já pronta, podemos especializar ela, criando outros 
// tipos de conta

function ContaCorrente(agencia, conta, saldo, limite){ 
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}


// processo para passar o prototype e tornar ele um objeto próprio, mas descendendo do objeto pai.
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor){
        console.log(`Saldo insuficiente ${this.saldo}`);
        return
    }
    this.saldo -= valor;
    this.verSaldo();
}

const contaCorrente1 = new ContaCorrente(11, 22, 0, 100);

contaCorrente1.verSaldo();
contaCorrente1.sacar(10);