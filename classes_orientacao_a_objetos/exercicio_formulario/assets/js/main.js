class ValidaCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'CpfLimpo',{
            get: function(){
                return cpfEnviado.replace(/\D+/g, '');
            }
        });
    }

    valida() {
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
    }

    criaDigito(cpfParcial){
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

    isSequencia(){
        const sequencia = this.CpfLimpo[0].repeat(this.CpfLimpo.length);
        return (sequencia === this.cpfLimpo);
    }
}



class ValidaFormulario {
    constructor() {
      this.formulario = document.querySelector('.formulario');
      this.eventos();
    }
  
    eventos() {
      this.formulario.addEventListener('submit', e => {
        this.handleSubmit(e);
      });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      let campos = this.camposSaoValidos();
      let cpf = this.verificaCpf();
    //   let senha = this.verificaSenha();
    //   if(senha && cpf && campos){
    //     alert('opa')
    //   }
    }
    
    // verificaSenha(){
    //     const senha = this.formulario.querySelector(".senha");
    //     const senha2 = this.formulario.querySelector(".repetir-senha");
    //     let result = true;
    //     let regex = /^{6,12}$/;

    //     if(senha.value != senha2.value && !regex.test(senha.value) || !regex.text(senha2.value)){
    //         alert("aaa")
    //         result = false;
    //     }
    //     return result;
    // }

    camposSaoValidos(){
        let valida = true;

        for(let campo of this.formulario.querySelectorAll(".error-text")){
            campo.remove();
        }
    
        for(let campo of this.formulario.querySelectorAll(".validar")){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.criaErro(campo, `${label} está vazio`);
                valida = false;
            }else if(campo.classList.contains('usuario')){
                // console.log(regex.test(campo.value))
                let regex = /^[a-zA-Z0-9]{3,12}$/
                if(!regex.test(campo.value)){
                    console.log("usuario inválido");
                    this.criaErroGenerico(campo, "Nome de usuário inválido")
                    valida = false;
                }
            }
        }
        return valida;
    }

    verificaCpf(){
        const cpfValor = this.formulario.querySelector(".cpf");
        const cpf = new ValidaCpf(cpfValor.value);
        const verificaCpf = cpf.valida();
        if(!verificaCpf){
            this.criaErroGenerico(cpfValor, "CPF inválido")
        }
        return verificaCpf;

    }

    verificaUser(campo){
        // let validaUser = true;
        let regex = /^[a-zA-Z0-9]{3,12}$/
        if(regex.test(campo.innerText)){
            console.log("usuario inválido");
            validaUser = false;
        }
        // return validaUser;
    }

    criaErroGenerico(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }

    criaErro(campo, msg){

        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); 
    }
}

const valida = new ValidaFormulario();


