const nomes = ["Thomas", 'Morello', "Benio", "paoDeAio"];

const removidos = nomes.splice(0, 2);
console.log(nomes, removidos)

//a sintaxe é array.splice(valor de onde vamos começar a mexer, quantos tamos remover, e o que vamos adc)

// se quisermos fazer algo como pop
nomes.splice(-1, 1);
console.log(nomes, removidos)

// se quisermos adc no final nós usamos (push)
nomes.splice(nomes.length,0, "Caio")
console.log(nomes, removidos)

// se quisermos adc no começo nós usamos
nomes.splice(-Number.MAX_VALUE,0, "Jonas")
console.log(nomes, removidos)
