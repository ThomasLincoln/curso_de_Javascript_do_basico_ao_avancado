const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
})

//se voce por :parametro voce recebe um parametro e se por ? vc recebe opcionalmente
app.get('/testes/:idUsuarios?', (req,res)=>{
    console.log(req.params)
    res.send('oi')
})

app.post('/', (req, res) =>{
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`)
})

app.get('/', (req, res) =>{
    res.send("hello world!")
});

app.listen(3000, ()=>{
    console.log("Acessar o http://localhost:3000")
    console.log('Servidor executando na porta 3000')
})