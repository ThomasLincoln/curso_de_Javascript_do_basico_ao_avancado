require('dotenv').config();

// * importanto express para facilitar no uso de requisições
const express = require('express')
const app = express()

// * mongoose é para podermos usar o mongodb
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// * conectando ao mongodb
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() =>{
        app.emit('pronto');
    })
    .catch(e => console.log(e))


// * configurações da sessão
const session = require('express-session');
const MongoStore = require('connect-mongo');

// * configurações do flash
const flash = require('connect-flash')


// * configurações das rodas e middlewares
const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')

// * setando o conteudo estatico 
app.use(express.urlencoded({extended: true}))
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

// * setando as views
app.set('views', path.resolve(__dirname,'src', 'views'));
app.set('view engine', 'ejs')

// * adcionando ao app as rotas de requisições
app.use(meuMiddleware)
app.use(routes);

// * rodando o local e tal
app.on('pronto', ()=>{
    app.listen(3000, ()=>{
        console.log("Acessar o http://localhost:3000")
        console.log('Servidor executando na porta 3000')
    })
})