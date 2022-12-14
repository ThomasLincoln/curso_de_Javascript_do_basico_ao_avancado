class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.nome = document.querySelector(".nome").value;
        this.sobrenome = document.querySelector(".sobrenome").value;
        this.cpf = document.querySelector(".cpf").value;
        this.usuario = document.querySelector(".usuario").value;
        this.senha = document.querySelector(".senha").value;
        this.verifySenha = document.querySelector(".repetir-senha").value;
        this.checaCampoVazio();
        this.checaUser();
        this.checaSenha();
    }

    checaUser(){
        let regex = /^[a-zA-Z0-9]{3,12}$/
        if(regex.test(this.usuario)){
            console.log("usuario inválido");
        }
    }

    checaSenha(){
        let regex2 = /^{6,12}$/ 
        if(regex2.test(this.senha) || regex2.test(this.verifySenha)){
            console.log("senha muito fraca");
        }else if(this.senha !== this.verifySenha){
            console.log("senhas diferentes");
        }
    }

    checaCampoVazio(){
        if(this.nome === ''){
            console.log('nome vazio')
        }
        if(this.sobrenome === ''){
            console.log('sobrenome vazio')
        }
        if(this.cpf === ''){
            console.log('cpf vazio')
        }
        if(this.usuario === ''){
            console.log('usuario vazio')
        }
        if(this.senha === ''){
            console.log('senha vazio')
        }
        if(this.verifySenha === ''){
            console.log('senha vazio')
        }
        // console.log(this.nome)
    }
}

const valida = new ValidaFormulario();