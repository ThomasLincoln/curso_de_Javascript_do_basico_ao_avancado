function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando`);
        },
        comer(){
            console.log(`${this.nome} está comendo`);
        }
    };
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa("Thomas", "Lincoln");

p1.comer();