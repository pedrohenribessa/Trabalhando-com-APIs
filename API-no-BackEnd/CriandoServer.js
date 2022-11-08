// Criando um server

const express = require('express')

const app = express()

app.listen('3000')

// GET
// app.route('/').get((req,res)=> res.send("Hello"))
// app.route('/sobre').get((req,res)=> res.send("Sobre"))

// POST
// Middleware

// app.use(express.json())

// app.route('/').post((req,res)=> res.send(req.body))

// PUT
// app.use(express.json())

// let author = "Lucas"

// app.route('/').get((req,res)=> res.send(author))
// app.route('/').put((req,res)=> {
//     author = req.body.author
//     res.send(author)
// } )

// DELETE
let author = "Pedro"

app.route('/:identificador').delete((req,res)=> {
    res.send(req.params.identificador)
})