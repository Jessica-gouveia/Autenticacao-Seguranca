const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuariaController')

router.post('/create', controller.create)
router.post('/login', controller.login)  

module.exports = router