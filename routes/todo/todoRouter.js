const express = require('express')
const router = express.Router()
const { getAllTodo, createTodo, updateTodoById, deleteById} = require('./controller/todoController')

router.get('/', function(req, res, next){
    getAllTodo({})
        .then((payload) => {
            res.json({message: "Success", payload})
        })
        .catch((error) => {
            res.status(500).json({message: "Failure", error: error.message})
        })
})

router.post('/create-todo', function(req, res, next){
    createTodo(req.body)
    .then((payload) => {
        res.json({message: "Success", payload})
    })
    .catch((error) => {
        res.status(500).json({message: "Failure", error: error.message})
    })
})
router.put('/update-todo-by-id/:id', function(req, res, next){
    updateTodoById(req.params.id, req.body)
    .then((payload) => {
        res.json({message: "Success", payload})
    })
    .catch((error) => {
        res.status(500).json({message: "Failure", error: error.message})
    })
})

router.delete('/delete-todo-by-id/:id', function(req, res, next){
    deleteById(req.params.id)
    .then((payload) => {
        res.json({message: "Success", payload})
    })
    .catch((error) => {
        res.status(500).json({message: "Failure", error: error.message})
    })
})

module.exports = router;