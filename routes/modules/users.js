const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.send('hello world')
})

router.post('/login', (req, res) => {

})

router.get('/register', (req, res) => {
  res.send('hi world')
})

router.post('/register', (req, res) => {
  
})

router.get('/logout', (req, res) => {

})

module.exports = router