export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass)
console.log(1)

    }
    init(){
        this.eventos();
    }
    eventos(){
        if(!this.form) return;
        this.form.addEventListener('submit', (e)=>{
            e.preventDefault()
            alert('form não enviado')
            // this.valida(e)

        })
    }
    valida(eventos){

    }
}