const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById("numero-titulo");
const raizQuadarada = document.getElementById("square_root")
const isNumber= document.getElementById("is_nan")
const isInt= document.getElementById("is_int")
const arre_baixo = document.getElementById("arr_down")
const arre_cima = document.getElementById("arr_up")
const casa2 = document.getElementById("casa_2")



isInt.innerHTML = Number.isInteger(numero)
numeroTitulo.innerHTML = numero;
raizQuadarada.innerHTML = Math.sqrt(numero)
isNumber.innerHTML = !isNaN(numero)
arre_baixo.innerHTML = Math.floor(numero)
arre_cima.innerHTML = Math.ceil(numero)
casa2.innerHTML = numero.toFixed(2)
