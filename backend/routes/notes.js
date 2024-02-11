const express = require('express')
const router = express.Router()
const {
    get_all,
    get_note,
    create_note

} = require('../controllers/noteControllers')

//ROUTES
//GET ALL
router.get('/', get_all)

//GET SINGLE
router.get('/:id', get_note)

//POST
router.post('/', create_note)

//DELETE 
router.delete('/:id',(req,res)=>{
    res.json({msg:'DELETE single note'})
})

//PATCH/UPDATE
router.patch('/:id',(req,res)=>{
    res.json({msg:'UPDATE single note'})
})

//Exports
module.exports= router;