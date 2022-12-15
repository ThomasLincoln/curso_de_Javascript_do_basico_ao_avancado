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
      this.camposSaoValidos();
    }
    
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

                let regex = /^[a-zA-Z0-9]{3,12}$/
                if(regex.test(campo.value)){
                    console.log("usuario inválido");
                    valida = false;
                }
            }
            
            // if(campo.classList.contains('usuario')){
                // }
                // if(campo.classList.contains('usuario')){
                    // const validaUser = this.verificaUser(campo);
                    // if(!validaUser){
                    // console.log(campo);
                    // this.criaErro(campo, `${label} está vazio`);
                // }
            // }
        }
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

    criaErro(campo, msg){

        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); 
    }
}

const valida = new ValidaFormulario();
