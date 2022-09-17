const elementos = [
    {tags: 'p', texto: 'Frase 1'},
    {tags: 'div', texto: 'Frase 2'},
    {tags: 'footer', texto: 'Frase 3'},
    {tags: 'section', texto: 'Frase 4'},
];

const container = document.querySelector(".container");
const div = document.createElement('div')


for(let i = 0; i <= 3; i++){
    let {tags, texto } = elementos[i];
    let elementoAtual = document.createElement(tags);
    elementoAtual.innerHTML = texto;
    div.appendChild(elementoAtual);
}   

container.appendChild(div)

