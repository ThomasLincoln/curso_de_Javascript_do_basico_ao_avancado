//  

document.addEventListener('click', (e)=>{
  const elemento = e.target;
  const tag = elemento.tagName.toLowerCase();
  if(tag === 'a'){
    e.preventDefault();
    carregaPagina(elemento)
  }
})

function carregaPagina(elemento){

  try{
    const href = elemento.getAttribute('href');
    const response = await fetch(href);
    if(response.status !== 200) throw new Error("erro de conexão");
    const html = await response.text() 
    carregaResultado(html);
  }
  catch(e){
    console.warn(e);
  }
}

function carregaResultado(response){
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}