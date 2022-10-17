// função construtura e fabrica retornam objetos
// porém, na construtura, nós temos q mudar como fazemos funções, e seu nome sempre começa com maiusculo
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    //nas construtoras nós não precisamos de ponto e virgula e nem virgula
    // para criar uma var ou método privates, usamos const
    const ID = 1290;

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () =>{
        console.log("sou um método");
    }
}
//aqui fica uma das principais diferenças, na hora de iniciar ela
const p1 = new Pessoa('Thomas', 'Lincoln')