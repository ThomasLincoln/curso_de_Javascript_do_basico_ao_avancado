Nessa aula, ele nos informa quais são 3 métodos importantes para o express.

# req.params

Enfim, quando você trabalha com requisições, pode-se usar parametros, eles estão nas próprias URLs, logo, você pode adcionar variáveis, na sua requisição, para caso vá por exemplo, usar como informação para saber em qual post você está, o que pode ser visto no facebook.


Exemplo: /profile/id=232&page=2

Assim, dizendo que você está ná página 2 e com o id=232.

```Js
app.get('/testes/:id?/:page', (req,res)=>{
    console.log(req.params)
    res.send('oi')
})
```
A parte em que voce escreve `/:id?/:page` é onde você pede os parametros, e eles ficam em req.params, pra isso é só acessar a partir dai. 

# req.body

O *req.body* é onde ficam os posts, tudo que for enviado pelo body, irá ficar ali, para ser tratado. Assim como o req.params, ele vem em forma de objeto, com chaves e tudo mais. 

É necessário colocar isso aqui no documento: 

`app.use(express.urlencoded({extended: true}))`

# req.query

O req.query tem a função de mostrar todos os parametros enviados, mesmo que você não peça 3 parametros e envie 3 parametros, o req.query irá ter os 3 em um objeto. 


