require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const note_routes = require('./routes/notes')
const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//Routing
app.use('/api/notes',note_routes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //Listening
        app.listen(process.env.PORT,() => {
        console.log("connected and listening. Hello from port",process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



