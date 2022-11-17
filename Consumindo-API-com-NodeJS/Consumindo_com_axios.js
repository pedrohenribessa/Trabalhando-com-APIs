const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3333')

app.route('/').get( (request,response) => {
    axios.get("https://api.github.com/users/pedrohenribessa")
    .then(result => response.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
} )