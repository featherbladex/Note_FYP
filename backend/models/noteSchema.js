const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noteSchema = new Schema({
    note_title:{
        type: String,
        required: true
    },
    note_body:{
        type: String,
        required: true
    }
},{timestamps : true})

module.exports = mongoose.model('Note', noteSchema)