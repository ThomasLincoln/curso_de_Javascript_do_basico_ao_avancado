fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementos(json))

function carregaElementos(json){
  const table = document.createElement('table');
  for(let pessoa of json){
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome
    tr.appendChild(td1)
    
    td1 = document.createElement('td');
    td1.innerHTML = pessoa.idade
    tr.appendChild(td1)
    
    td1 = document.createElement('td');
    td1.innerHTML = pessoa.salario
    tr.appendChild(td1)

    table.appendChild(tr)
  }

  const resultado = document.querySelector('.resultado')
  resultado.appendChild(table)
}