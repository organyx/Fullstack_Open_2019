const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log('MongoDb', 'Connected'))
    .catch((err) => console.log('MongoDb', 'Error: ' + err.message))

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.requestLogger)

app.use('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app

