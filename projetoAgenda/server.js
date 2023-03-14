
// *! arquivos relacionados a variaveis que devem ser ocultas, coisas relacionadas ao ambiente de desenvolvimento
require('dotenv').config();

// * inicializar express
const express = require('express')
const app = express()

// * mongoose é para podermos usar o mongodb, ele que irá modelar a nossa base de dados
const mongoose = require('mongoose');
// * conectando ao mongodb
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() =>{
        app.emit('pronto');
    })
    .catch(e => console.log(e))

// * usado para reconhecer o navegador do user
const session = require('express-session');
// * falar pra sessão vai ser salva no banco de dados
const MongoStore = require('connect-mongo');
// * flash autodestrutivas
const flash = require('connect-flash')
// * são as rotas do nosso site, ele que tem as requisições e tal
const routes = require('./routes')
// * um role pra trabalhar com caminhos
const path = require('path')
// * segurança
const helmet = require('helmet');
// * tokens para os formulários
const csurf = require('csurf')
// * nossos middlewares
const {middlewareGlobal, checkCSRFError, csrfMiddleware} = require('./src/middlewares/middleware')

// usando o helmet
app.use(helmet())
// * permitindo que enviemos formulários para o site
app.use(express.urlencoded({extended: true}))
// * permitir que enviemos jscon para o site
app.use(express.json())
// * configura o acesso a arquivos estáticos de forma direta
app.use(express.static(path.resolve(__dirname, 'public')));

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

// * importanto para o app o session e flash
app.use(sessionOptions);
app.use(flash())

// * setando o caminho das views
app.set('views', path.resolve(__dirname,'src', 'views'));
// * configurando a engine que nós usamos para renderizar isso
app.set('view engine', 'ejs')

app.use(csurf())
// * adcionando ao app as rotas de middlewares

app.use(csrfMiddleware)
app.use(checkCSRFError)
app.use(middlewareGlobal)
app.use(routes);

// * rodando o local e tal
app.on('pronto', ()=>{
    app.listen(3000, ()=>{
        console.log("Acessar o http://localhost:3000")
        console.log('Servidor executando na porta 3000')
    })
})