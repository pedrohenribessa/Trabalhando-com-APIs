const { request, response } = require('express');
const express = require('express')
const uuid = require("uuid");
const app = express()
app.listen(3333);

// Body

// app.use(express.json());

// const cities = [];

// app.route('/').post(( request, response ) => {
//     const { name } = request.body;
    
//     const cityExists = cities.find(city => city.name === name);
//     if(cityExists) {
//         return response.status(400).json({success: false, message: "Já existe uma cidade com esse nome."});
//     }

//     cities.push({ name, id: uuid.v4() });
//     return response.status(201).json({ success: true, message: "Criado com sucesso." })
// })

// app.route("/").get((request, response) => {
//     return response.json(cities);
// }) 

// Route

// app.route("/").get( (request,response) => response.send("oi") )
// app.route("/:varialvel").get( (request,response) => response.send(request.params.varialvel) )
// app.route("/identidade/:nome").get( (request,response) => response.send(request.params.nome) )

// Query

// app.route("/").get( (request,response) => response.send(request.query.nome) )

// app.route("/about/user").get( (request,response) => response.send(request.query.id) )