# Disclaimer

Aqui, irei resumir as coisas que for estudando a partir de express na pasta Node, futuramente pretendo adcionar o conteúdo anteriormente estudado, porém. Devido o fato de ser um longo conteúdo, eu irei me manter apenas nas coisas a partir daqui.

# Conteúdo 

* Routes
  
## Routes

O route são uma forma de particionar as rotas que você faz no express, como seus gets e posts, podendo organizar eles todos em um só arquivo e importando as funções de arquivos separados, chamados controllers.

Os controllers são basicamente arquivos Js, que exportam suas funções, como essa: 

```Js
exports.trataPost = (req,res)=>{
    res.send("sou sua nova requisição")
}
``` 
Assim, essa função pode ser usada dentro do `routes.js` para execução do projeto. 

Um exemplo de import da route: 

```Js
 const express = require('express');
 const route = express.Router();
 const homeController = require("./controllers/controllersMenu")

 // Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

module.exports = route;
```

E depois, você exporta essas suas rotas, para o arquivo principal, algum `server.js` por exemplo.


Server.js:

```Js
const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(routes);
```


