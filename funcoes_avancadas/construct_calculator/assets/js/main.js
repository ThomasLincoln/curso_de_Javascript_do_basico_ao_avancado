function CriaCalculadora(){
        //atributos
        this.display = document.querySelector('.display')
        
        // métodos
        this.inicia = ()=>{
            // alert("opa, iniciei");
            this.cliqueBotoes();
            this.pressionaEnter();
        }

        this.pressionaEnter = () =>{
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode == 13){
                    this.realizaConta();
                }
            })
        }

        this.clearDisplay = () =>this.display.value = '';

        this.apagaUm = () => this.display.value = this.display.value.slice(0,-1);

        this.realizaConta = () => {
            let conta = this.display.value;
            try{
                conta  = eval(conta);
                if(!conta){
                    alert('conta inválida');
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('conta inválida');
                return;
            }
        }


        this.cliqueBotoes = () => {
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn-num'))this.btnParaDisplay(el.innerText);
                if(el.classList.contains('btn-clear'))this.clearDisplay();
                if(el.classList.contains('btn-del'))this.apagaUm();
                if(el.classList.contains('btn-eq'))this.realizaConta();
                
            }.bind(this));
        }

       this.btnParaDisplay = (valor) => this.display.value += valor;
}

const calculadora = new CriaCalculadora();
calculadora.inicia();