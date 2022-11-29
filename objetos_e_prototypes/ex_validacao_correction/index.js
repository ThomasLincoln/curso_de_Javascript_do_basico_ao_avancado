// função construtora
function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, 'CpfLimpo',{
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCpf.prototype.valida = function(){
    if(typeof this.CpfLimpo === 'undefined'){
        return false;
    }

    if(this.CpfLimpo.length !== 11){
        return false;
    }

    if(this.isSequencia()){
        return false;
    }

    const cpfParcial = this.CpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    // console.log(digito1);
    // console.log(digito2);
    const novoCpf = cpfParcial + digito1 + digito2;
    // console.log(novoCpf);
    return novoCpf === this.CpfLimpo;
};


ValidaCpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    // console.log(cpfArray);
    // let somador;
    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) =>{
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    },0)
    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito;
}

ValidaCpf.prototype.isSequencia = function(){
    const sequencia = this.CpfLimpo[0].repeat(this.CpfLimpo.length);
    return (sequencia === this.cpfLimpo);
}

const cpf = new ValidaCpf('070.987.720-03');
// console.log(cpf.CpfLimpo);
console.log(cpf.valida());