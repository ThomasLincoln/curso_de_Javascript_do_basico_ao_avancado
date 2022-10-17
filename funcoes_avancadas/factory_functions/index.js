function criaPessoa(nome, sobrenome, peso, altura){
    return{
        nome, sobrenome,
        fala: function(assunto){
            return `${this.nome} tem ${assunto}.`;
        },
        peso,
        altura,
        
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //isso é um getter, logo isso é um método, mas vira uma propriedade
        get imc(){
            return (this.peso/(this.altura**2)).toFixed(2);
        },

        set nomeCompleto(valor){
            valor = valor.split(' ')
            console.log(valor)
        }
    };
}

const p1 = criaPessoa('Thomas', 'Lincoln', 73, 1.70);
p1.nomeCompleto = 'Lucas Lacerda'
console.log(p1.nomeCompleto);