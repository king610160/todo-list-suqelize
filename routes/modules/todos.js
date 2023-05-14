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
    // const userId = req.user._id
    const id = req.params.id
    return Todo.findByPk(id)
        .then((todo) => res.render('edit', { todo: todo.toJSON() }))
        .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  
})

router.put('/:id', (req, res) => {
//   const userId = req.user._id
  const id = req.params.id
  const { name, isDone } = req.body   //使用者輸入的表單內容,拿取對應參數

  return Todo.findByPk(id) //呼叫Todo，用id找到對應資料(使用者改id頁面的id去找)
    .then(todo => { //不使用lean是因為還不需要解析資料
      todo.name = name //資料庫裡的name變成使用者輸入的name
      todo.isDone = (isDone === 'on')
      return todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))  //新增完成後導回詳細頁，確認輸入資料
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
    // const userId = req.user._id
    const id = req.params.id
    return Todo.findByPk(id)
    //   .then(() => console.log(Todo.findByPk(id)))
      .then((todo) => todo.remove())  //找到對應id才能做remove
      .then(() => res.redirect('/'))  //remove後到根目錄
      .catch(error => console.log(error))
})



//匯出路由模組
module.exports = router