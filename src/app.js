const express = require('express')
const app = express()
require('dotenv-safe').config()

//TODO:
//conectar o db
const db = require('./data/database')
db.connect()
//usar as rotas
app.use(express.json())

const estudiosRouter = require('./routes/estudios.router')
app.use('/estudios', estudiosRouter)

const tituloRouter = require('./routes/titulos.router')
app.use('/titulos', tituloRouter)

const usuariasRouter = require('./routes/usuaria.router')
app.use('/usuarias', usuariasRouter)

module.exports = app 