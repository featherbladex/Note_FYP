const express = require('express')
const router = express.Router()
const {
    get_all,
    get_note,
    create_note,
    delete_note,
    update_note

} = require('../controllers/noteControllers')

//ROUTES
//GET ALL
router.get('/', get_all)

//GET SINGLE
router.get('/:id', get_note)

//POST
router.post('/', create_note)

//DELETE 
router.delete('/:id', delete_note)

//PATCH/UPDATE
router.patch('/:id', update_note)

//Exports
module.exports= router;