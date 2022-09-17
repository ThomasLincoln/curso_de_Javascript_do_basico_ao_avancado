/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 Kg 
tem 1.8 de altura e seu IMC é de 25.952
*/

const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30;
let peso = 84;
let alturaEmM = 1.8;
let imc = peso/(altura * altura);
let anoDeNascimento = 2022 - 30;

console.log(`${nome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`Nasceu em ${anoDeNascimento}`);
