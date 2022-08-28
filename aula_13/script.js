let varA = 'A' // B
let varB = 'B' // C 
let varC = 'C' // A

let aux2;

aux2 = varB
varB = varC
varC = varA
varA = aux2

console.log(varA, varB, varC)
