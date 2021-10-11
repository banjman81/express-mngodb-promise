const express = require('express')
const router = express.Router()
const { getAllRecipe, createRecipe, updateRecipeById, deleteRecipeById } = require('./controller/recipeController')

router.get('/', function(req, res, next){
    getAllRecipe({})
        .then(function(payload){
            res.json({message: 'success', payload})
        })
        .catch(function(error){
            res.status(500).json({message: 'Failure', error: error.message})
        })
})

router.post('/create-recipe', function(req, res, next){
    createRecipe(req.body)
        .then(function(payload){
            res.json({message: 'success', payload})
        })
        .catch(function(error){
            res.status(500).json({message: 'Failure', error: error.message})
        })
})

router.put('/update-recipe-by-id/:id', function(req, res, next){
    updateRecipeById(req.params.id, req.body)
        .then(function(payload){
            res.json({message: 'success', payload})
        })
        .catch(function(error){
            res.status(500).json({message: 'Failure', error: error.message})
        })
})

router.delete('/delete-recipe-by-id/:id', function(req, res, next){
    deleteRecipeById(req.params.id)
        .then(payload => {
            res.json({message: 'Deleted', payload})
        })
        .catch(error => {
            res.status(500).json({message: "failed to delete", error: error.message})
        })
})

module.exports = router;
