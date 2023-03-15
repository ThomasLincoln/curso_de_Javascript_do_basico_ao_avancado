# Disclaimer

Aqui, irei resumir as coisas que for estudando a partir de express na pasta Node, futuramente pretendo adcionar o conteúdo anteriormente estudado, porém. Devido o fato de ser um longo conteúdo, eu irei me manter apenas nas coisas a partir daqui.

# Conteúdo

- Routes
- Views

---

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

---

## Views

As views são uma forma de renderizar a sua página html de uma forma mais prática usando o sistema de requisições, para fazer isso você primeiro deve:

Setar o app para usar view:

```Js
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs')
```

> Isso é feito no arquivo do server.

Depois é preciso instalar o views usando `npm i ejs`, assim crie um arquivo .ejs que será a página que você irá renderizar, nele você pode adcionar tags html sem problema algum.

Trate esse arquivo .ejs como um HTML buffado, assim criando ele, você deve mudar o que seu controller irá renderizar.

Por exemplo:

```Js
exports.paginaInicial = (req, res) => {
    res.render('index');
}
```

---

## Static

Arquivos estáticos são por exemplo, seus arquivos html, css ou até mesmo o bundle js.

Para usarmos, isso primeiro nós precisamos configurar no nosso arquivo principal:

```Js
app.use(express.static(path.resolve(__dirname, '..', 'public')));

```

Nesse caso, nossos arquivos estaticos ficaram na pasta public, assim, nós podemos usar conteúdos estáticos.

Para acesar no link, você pode só adcionar `/exemplo.html`.

## Middlewares

Os middlewares são as funções que lidam com as requisições, que contém `(req, res, next)`.

Assim, quando o site fizer uma requisição, você chama um middleware, que irá fazer algo e depois passar para o proximo middleware ou para a função final usando `next()`.

Quando você vai terminar você pode usar um `return;`.

> A principio os middlewares são apenas as funções que necessitam do next, pq são funções intermediárias. 

Os middlewares, são assim:

```Js
function meuMiddleware(req, res, next){
    console.log();
    console.log('passei no seu middleware');
    console.log();
    next();
 }

function meuOutroMiddleware(req, res){
    console.log('cheguei no outro middleware');
    return;
}

 // Rotas da home
route.get('/', meuMiddleware, meuOutroMiddleware);
```

--- 

## Mongodb exportar dados

A parte inicial de configuração, por ser uma informação passivel de ser datada, eu não irei mencionar aqui, porém a parte que eu for aprendendo irei explicar aqui, primeiramente, aprendi a criar tabelas e enviar os dados pra ela. 

Para isso criamos um model, que é basicamente a forminha dos dados:

HomeModel.js

```Js 
const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);
```

Como ele não é relacional, você mesmo precisa configurar seus dados, para que ele envie e salve os dados da forma que você quer.

Já, na hora de importar, usamos: 

homeController.js
```Js
const HomeModel = require('path')

HomeModle.create({
    titulo: 'um titulo de teste',
    descricao: 'uma descricao de teste'
})
.then(dados => console.log(dados))
.catch(e => console.log(e))
```

## Sessions

Isso é  basicamente quando você salva aos dados do navegador, para que por exemplo, seu usuário não precise logar todas as vezes que ele abrir o navegador. Caso ele queira, claro. 

Porém, não podemos salvar esses dados na memória, pois poderia superlotar a memória do servidor, assim, uma possivel alternativa é a de salvar esses dados no nosso banco de dados.

Para usar elas, nós precisamos primeiramente importar, usando `const session = require('express-session');` e `const MongoStore = require('connect-mongo')(session);`, assim importamos o express-session e o connect-mongo de sessões, assim permitindo que nós acessemos as sessões e depois podermos salvar elas. 

De preferencia, faça isso depois de conectar com a base de dados.


Para configurar a sessão e ela não salvar os dados na memória, você usa: 

```Js
// * configurando as opções da sessão (express-session)
const sessionOptions = session({
    secret: 'dasudj8ihfkjiea h98f3h28 fhjiasdhfjd hsj',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

// * importanto para o app o session
app.use(sessionOptions);
```



## Flash Messages

Geralmente a gente não precisa desse recurso, pois api's ou frameworks fazem isso de uma forma mais simnples, porém, iremos ver como fazer na unha. Essas mensagens são aquelas que aparecem na tela quando por exemplo o usuário erra a senha, assim seria uma mensagem que desaparece depois que ela é lida.
```Js
    req.flash('info', 'ola mundo')
    req.flash('error', 'deu erro')
    req.flash('sucess', 'djkasjd')
``` 

```Js
    console.log(req.flash('error'), req.flash('sucess'), req.flash('info'))

```
--- 

## Injetar coisas no Ejs

Para injetar variaveis ou até mesmo outros trechos de "código" html, basta usar essas tags ejs:

```
 <%  %> -> para usar javascript puro nele
 <%= %> -> para adcionar texto na página
 <%- %> -> para adcionar texto, porém ele entende tags html, como style
 <%# para comentários %>
 <%- include(caminho/arquivo) %>
```


## Helmet e CSRF

São dois pacotes de segurança, importantes para a segurança do seu site. Primeiramente o Helmet, ele é recomendado pelo próprio site do express, para que seja usado, só é preciso instalar o pacote e usá-lo no app.

```Js
// * pacote de segurança recomendado pelo express
const helmet = require('helmet');
app.use(helmet())
```

Já o csrf, ele é usado para impedir, que outras pessoas realizem "posts" de dados no seu banco, de qualquer outro lugar. Ele faz isso criando tokens para seus inputs, e só aceitando os inputs caso ele mesmo detecte que esse token é válido, e esses tokens são modificados sempre que a página é aberta. 

Para usá-lo, primeiro o importe:

```Js
const csurf = require('csurf')
```

Também será necessário criar middlewares:

```Js
app.use(csurf())
app.use(csrfMiddleware)
app.use(checkCSRFError)
```

Os middlewares, podem ser algo como:


```Js
exports.checkCSRFError = (err, req, res, next) =>{
    if(err && err.code == 'EBADCSRFTOKEN'){
        return res.render('404');
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}
```

E na hora de usá-lo, você deve adcionar um input hidden no seu formulário:

```html
<input type="hidden" name="_csrf" value="<%=csrfToken%>">
```

Assim, ele irá sempre verificar, caso aquele input não seja valido, vc pode enviar ele para alguma pagina de erro, como no caso eu enviei par aa página de nome 404. 

Além de que é preciso usar ejs até onde eu entendi.