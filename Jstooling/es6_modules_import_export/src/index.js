

import {nome as nome2, sobrenome, idade, soma, Pessoa} from './module1'

console.log(nome2, sobrenome, idade, soma(5,5))

const p1 = new Pessoa("Thomas", "Lincoln");
console.log(`${p1.nome} ${p1.sobrenome}`)

//  outra forma de importar é assim

import * as MeuModulo from './module1';
console.log(MeuModulo)