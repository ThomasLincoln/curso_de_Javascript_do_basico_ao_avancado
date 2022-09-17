const texto = document.querySelector('.paragrafo');
const paragrafos = texto.querySelectorAll('p')
console.log(paragrafos)

for (let ps of  paragrafos){
    console.log(ps)
    ps.style.backgroundColor = 'red'
    ps.style.color = 'black'
}