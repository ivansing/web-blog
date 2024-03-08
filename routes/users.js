const express = require('express')
const UserControllers = require('../controllers/user-controller')
const router = express.Router()

router.post('/signup', UserControllers.signup())
router.post('/login', UserControllers.login())
router.patch('/update/:id', UserControllers.update())
router.get('/loggedInUser', UserControllers.loggedInUser())

module.exports = router