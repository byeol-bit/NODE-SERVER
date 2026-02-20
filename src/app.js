const express = require('express')
const indexRouter = require('./routes')
const cors = require('cors')

const app = express()

// 미들웨어
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 라우터 연결
app.use('/', indexRouter)

module.exports = app