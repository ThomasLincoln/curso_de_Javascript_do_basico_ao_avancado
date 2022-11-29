// 70548445052
function verifica (texto, N){
    // if(sequencia(texto))
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

function verifica_constante(numero){

    for(let i = 1; i<10; i++){
        // let mult = pow(10, 2);
        let numerounidade = numero % mult;
        console.log(`casa número ${i} tem valor: ${numerounidade}`);
    }
}


function verificaCpf(cpf_input){
    let cpf_texto = cpf_input.replace(/\D+/g, '');
    cpf_numero = parseInt(cpf_texto);
    // verifica_constante(cpf_numero);
    // if(verifica_constante(cpf_numero)){
    //     return console.log("números repetidos não são permitidos");
    // }

    const prova = cpf_numero % 100;
    let cpf_aux = cpf_numero;
    cpf_aux -= cpf_numero % 100;
    
    if(cpf > 99999999999){
        return console.log('erro');
    }

    
    let soma = verifica(cpf_texto, 10) * 10;
    cpf_aux += soma;
    soma += verifica(cpf_texto, 11);
    
    
    if(soma === prova){
        console.log("cpf válido");
    }else{
        console.log("cpf inválido");
    }
    
}

const cpf = '705.484.450-52';
const num = 1110223;

// console.log(num % 10)
// verifica_constante(num);
verificaCpf(cpf);