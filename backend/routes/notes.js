const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({msg:'GET all notes'})
})

router.get('/:id',(req,res)=>{
    res.json({msg:'GET single note'})
})

router.post('/',(req,res)=>{
    res.json({msg:'POST new note'})
})

router.delete('/:id',(req,res)=>{
    res.json({msg:'DELETE single note'})
})

router.patch('/:id',(req,res)=>{
    res.json({msg:'UPDATE single note'})
})
module.exports= router;