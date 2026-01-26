const express = require('express')
const morgan = require('morgan')
const {default : helmet} = require('helmet')
const compression = require('compression')
const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
require('./dbs/init.mongoDB')
app.use('/', (req, res, next) =>{
    const strCom = 'hello wsl'
    return res.status(200).json({
        message:'Hello WSL ',
        metadata:strCom.repeat(10000)
    })
})

module.exports = app