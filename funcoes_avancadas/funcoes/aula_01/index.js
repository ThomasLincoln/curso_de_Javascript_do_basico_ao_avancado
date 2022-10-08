// Formas de declarar uma função

//hoisting -> elevar funções e variaveis declaradas com var para o topo do código. 
//como nessa função
function falaOi(){
    console.log("Oi");
}

// também podemos tratar a função como um dado. 
const souUmDado = function(){
    console.log("sou um dado");
};

souUmDado();

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

// arrow function
const funcaoArrow = () =>{
    console.log("eu sou uma arrow function");
}

funcaoArrow();

// como método

const obj = {
    falar(){
        console.log('estou falando...');
    },
    opa: 23
}

console.log(obj.falar(), obj.opa);