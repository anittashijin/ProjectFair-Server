//Loads .env file contents into process.env by default.
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./Controller/DB/connection')

//create an express application.
const pfServer = express()

//use cors in express server 
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`projects serverstarted at PORT : ${PORT}`);
})
pfServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Projects fair Server started and waiting for client request!!!</h1>`)
})