const express = require('express')
const app = express()
const cors = require('./middlewares/cors')
const { mongoose } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/motorcycle';
const port = 'http://localhost:3030'

const initDB = mongoose.connect(connectionString)

startServer()
async function startServer() {
    initDB();
    app.use(express.json())
    app.use(cors())
    //trimBody
     
}
