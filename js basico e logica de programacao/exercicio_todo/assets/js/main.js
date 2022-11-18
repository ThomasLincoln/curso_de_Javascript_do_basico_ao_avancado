

function escopo(){
    const form = document.querySelector('.formulario');
    const tarefasDiv = document.querySelector('.tarefas');
    let arrayDeCoisas = []
    

    //----------------functions-------------------------
    //função para criar a tarefa
    function criaTarefa(valor, posicao){
        const li = document.createElement('li');
        const botao = document.createElement('button');
        li.textContent = valor;
        li.classList.add(posicao);
        botao.textContent = 'concluir';
        botao.classList.add("Apagar");
        li.appendChild(botao);
        return li;
    }
    
    //funções para att a lista de tarefas
    
    function addValores(arrayDeCoisas){
        const tarefasDiv = document.querySelector('.tarefas');
        let i = 0;
        for(let valor of arrayDeCoisas){
            li = criaTarefa(valor, i);
            i++;
            tarefasDiv.appendChild(li);
        }    
        const tarefasJson = JSON.stringify(arrayDeCoisas);
        localStorage.setItem('tarefas', tarefasJson);
    }
    
    //função do event listener do forms
    
    function recebeEvento(e){
        e.preventDefault();
        let valor = document.querySelector("#caixa");
        arrayDeCoisas.unshift(valor.value);
        tarefasDiv.textContent = ''
        addValores(arrayDeCoisas)
        valor.value = ''
    }
    // função para apagar
    document.addEventListener('click', function(e){
        const el = e.target;
        if(el.classList.contains('Apagar')){
            posicao = el.parentElement.classList[0];
            console.log(posicao)
            el.parentElement.remove();
            arrayDeCoisas.splice(posicao);
            const tarefasJson = JSON.stringify(arrayDeCoisas);
            localStorage.setItem('tarefas', tarefasJson);
        }
    });
    //------------------------------------------
    form.addEventListener('submit', recebeEvento)
}
escopo()



// const li = criaTarefa(valor);

// li.textContent = 'opa'
