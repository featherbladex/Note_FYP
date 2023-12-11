require('dotenv').config()

const express = require('express')
const note_routes = require('./routes/notes')
const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//Routing
app.use('/api/notes',note_routes)

//Listening
app.listen(process.env.PORT,() => {
    console.log("hello from port",process.env.PORT)
})

