function meuEscopo (){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado")
    
    const pessoas = [];

    function criaObjeto(nome, sobrenome, peso, altura){
        const pessoa = {
            nome, sobrenome, peso, altura
        }
        return pessoa;
    }

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");
        pessoas.push(criaObjeto(nome.value, sobrenome.value, peso.value, altura.value))
        console.log(pessoas)
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} pesa: ${peso.value} e tem: ${altura.value} </p> <br/> `
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();