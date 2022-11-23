// 70548445052
function verifica (texto, N){
    let mult = N;
    let soma = 0;
    for(let i = 0; i < N-1; i++){
        const num_atual = parseInt(texto[i]);
        soma += num_atual * mult;
        mult --;
    }

    const aux = 11 - (soma % 11);
    if (aux > 9) aux = 0;
    return aux;
}



const cpf = 70548445052;
const prova = cpf % 100;

let texto = cpf.toString();
let cpf_aux = cpf;
cpf_aux -= cpf % 100;
let soma = verifica(texto, 10) * 10;
cpf_aux += soma;
texto = cpf_aux.toString();
soma += verifica(texto, 11);

if(soma === prova){
    console.log("cpf válido");
}else{
    console.log("cpf inválido");
}
