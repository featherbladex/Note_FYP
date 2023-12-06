require('dotenv').config()

const express = require('express')

const app = express()

//Routing
app.get('/' , (req,res) => {
    res.json({msg: "Welcome to the app."})
})

//Listening
app.listen(process.env.PORT,() => {
    console.log("hello from port",process.env.PORT)
})

