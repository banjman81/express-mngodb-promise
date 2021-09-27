const Todo = require('../model/Todo')


function getAllTodo(body) {
    return new Promise((resolve, reject) => {
        Todo.find(body)
        .then((payload) => {
            resolve(payload)
        })
        .catch((error) => {
            reject(error)
        })
    })
}

function createTodo(body) {
    return new Promise((resolve, reject)=> {
        const createdTodo = new Todo({
            todo : body.todo
        })

        createdTodo.save(body)
            .then((payload) =>{
                resolve(payload)
            })
            .catch((error) =>{
                reject(error)
            })
    })
}

module.exports = {
    getAllTodo,
    createTodo,
}