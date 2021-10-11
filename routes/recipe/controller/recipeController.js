const Recipe = require('../model/Recipe')

function getAllRecipe(body) {
    return new Promise(function(resolve, reject){
        Recipe.find(body)
            .then(payload => {
                resolve(payload)
            })
            .catch(error => {
                reject(payload)
            })
    })
}

function createRecipe(body) {
    return new Promise(function(resolve, reject){
        const createdRecipe = new Recipe({
            recipe: body.recipe,
            price: body.price
        })

        createdRecipe.save(body)
            .then(payload => {
                resolve(payload)
            })
            .catch(error => {
                reject(error)
            })
    })
        
}

function updateRecipeById(id, body) {
    return new Promise(function(resolve, reject){
        Recipe.findByIdAndUpdate(id, body, {new : true})
            .then(payload => {
                resolve(payload)
            })
            .catch(error => {
                reject(error)
            })
    })
}

function deleteRecipeById(id) {
    return new Promise(function(resolve, reject){
        Recipe.findByIdAndDelete(id)
            .then(payload => {
                resolve(payload)
            })
            .catch(error => {
                reject(error)
            })
    })
}

module.exports = {
    getAllRecipe,
    createRecipe,
    updateRecipeById,
    deleteRecipeById
};