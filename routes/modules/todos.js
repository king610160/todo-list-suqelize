const express = require('express')
const router = express.Router()

//引用 Todo model
const db = require('../../models')

const Todo = db.Todo
const User = db.User

router.get('/new', (req, res) => {
  return res.render('new')
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    return Todo.findByPk(id)
      .then(todo => res.render('detail', { todo: todo.toJSON() }))
      .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  
})

router.post('/', (req, res) => {
  
})

router.put('/:id', (req, res) => {
  
})

router.delete('/:id', (req, res) => {
 
})



//匯出路由模組
module.exports = router