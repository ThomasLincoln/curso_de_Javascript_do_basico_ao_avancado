import ValidaCpf from "./validaCpf";

export default class GeraCpf{


    // gerar um numero de cpf aleatório
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }
    geraNovoCpf(){
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCpf.criaDigito(cpfSemDigito);
        const digito2 = ValidaCpf.criaDigito(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2;
        return novoCpf;
    }

}