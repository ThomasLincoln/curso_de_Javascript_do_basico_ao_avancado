const simbolos = "[]{}()*&$#@!?|+=-_";

export default function geraSimbolo(){
    return simbolos.charAt(Math.floor(Math.random() * simbolos.length))
}