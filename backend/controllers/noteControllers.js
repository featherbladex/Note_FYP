const Note = require('../models/noteSchema')
const mongoose = require('mongoose')

//GET ALL
const get_all = async (req, res) => {
    const notes = await Note.find({}).sort({createdAt: -1})
    res.status(200).json(notes)

}

//GET SINGLE
const get_note = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No note found :('})
    }
    const note = await Note.findById(id)

    if(!note) {
        return res.status(404).json({error: 'No note found :('})
    }

    res.status(200).json(note)
}

//POST
const create_note = async (req,res) => {
    const {note_title, note_body}= req.body

    try{
        const note = await Note.create({note_title,note_body})
        res.status(200).json(note)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//DELETE 
const delete_note = async (req, res) => {}

//PATCH/UPDATE
const update_note = async (req, res) => {}


//Export

module.exports = {
    get_all,
    get_note,
    create_note
}