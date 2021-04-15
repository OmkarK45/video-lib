const express = require('express')
const { checkAuth } = require('../middlewares/checkAuth')
const router = express.Router()

const { register, login, logout, user } = require('../controllers/auth')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/user').get(checkAuth, user)
module.exports = router
