let arrayDeCoisas = []

function criaTarefa(valor){
    const li = document.createElement('li');
    const botao = document.createElement('button');
    li.textContent = valor;
    botao.textContent = 'Apagar';
    li.appendChild(botao);
    return li;
}


function addValores(arrayDeCoisas){
    const tarefasDiv = document.querySelector('.tarefas');
    for(let valor of arrayDeCoisas){
        li = criaTarefa(valor)
        tarefasDiv.appendChild(li);
    }    
}

function escopo(){
    const form = document.querySelector('.formulario');
    const tarefasDiv = document.querySelector('.tarefas');
    function recebeEvento(e){
        e.preventDefault();
        let valor = document.querySelector("#caixa");
        arrayDeCoisas.unshift(valor.value);
        tarefasDiv.textContent = ''
        addValores(arrayDeCoisas)
        valor.value = ''
    }
    form.addEventListener('submit', recebeEvento)
}
escopo()



// const li = criaTarefa(valor);

// li.textContent = 'opa'
