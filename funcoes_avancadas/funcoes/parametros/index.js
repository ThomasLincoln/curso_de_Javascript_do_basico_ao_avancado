function funcao(){
    console.log(arguments[1]);
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total)
}

funcao(1,2,3,4,5,6,7,8,9)


// em funções criadas com function, temos uma var arguments que contem todos os parametros passados,
// independente de qualquer coisa, ele passa os valores, msm q na function vc nao tenha criado 
// os parametros

//assim sabemos que o numero de argumentos e parametros pode ser diferente e não haverá um erro



// podemos cetar um valor base para o parametro
function soma(a = 4, b = 2){
    console.log (a + b);
}

soma(2);

//podemos pular também, caso quisessemos definir o b e não o a

soma(undefined, 2);


//podemos passar um objeto dentro dos argumentos
function funcaoNome({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}

let obj = {nome: "thomas", sobrenome: 'Lincoln', idade:19}

funcaoNome(obj)

// também temos o rest operator, usanbdo o ...args podemos acessar todos os argumentos em 
// qualquer tipo de função.

const conta = (...args) =>{
    console.log(args);
};

conta ('+', 1,2,3,4,5);
