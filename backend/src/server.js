const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')



const routes = require('./routes')
const server = express()//inicia o server

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-j0ewp.mongodb.net/test', {
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333) //porta do localhost 