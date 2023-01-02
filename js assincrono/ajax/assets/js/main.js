const request = obj =>{
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send(null);
  xhr.addEventListener("load", ()=>{
    if(xhr.status >= 200 && xhr.status < 300){
      obj.sucess(xhr.responseText);
    } else{
      obj.error(xhr.statusText);
    }
  })
}

document.addEventListener('click', (e)=>{
  const elemento = e.target;
  const tag = elemento.tagName.toLowerCase();
  if(tag === 'a'){
    e.preventDefault();
    carregaPagina(elemento)
  }
})

function carregaPagina(elemento){
  const href = elemento.getAttribute('href');
  console.log(href)

  request({
    method: 'GET',
    url: href,
    sucess(response){
      carregaResultado(response);
    },
    error(errorText){
      console.log(errorText);
    }
  })
}

function carregaResultado(response){
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}