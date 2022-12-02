const pessoas = [
    {id: 3, nome: "Luiz"},
    {id: 2, nome: "Pedro"},
    {id: 1, nome: "Lucas"}
]

/* 

const novasPessoas = []
for (const pessoa of pessoas){
    const{ id } = pessoa
    novasPessoas[id] = {...pessoa};
}
*/

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const { id } = pessoa
    novasPessoas.set(id, {...pessoa});
}


console.log(novasPessoas.get(2));
novasPessoas.delete(2);

// para removermos nós usamos o delete
// para vc setar o valor, vc usa o set e para pegar ele vc usa o get

