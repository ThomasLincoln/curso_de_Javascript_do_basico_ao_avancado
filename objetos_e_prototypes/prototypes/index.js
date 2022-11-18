function Pessoas(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
};

// a ideia é fazer métodos com que um método seja colocado em todos os objetos criados com o construtor
// geralmente quando temos métodos q fazem a mesma coisa para todos os objetos, nós usamos o prototype
Pessoas.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome
};
// e como não criamos várias vezes o método para todos os objetos, o site fica muito mais perfomático


const pessoa1 = new Pessoas("thomas", "lincoln");
const pessoa2 = new Pessoas("caio", "pica nelas");

console.dir(pessoa1);
console.dir(pessoa2);
