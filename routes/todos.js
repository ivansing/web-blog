const express = require('express')
const TodosControllers = require('../controllers/todos-controllers')
const router = express.Router()

router.get('/', TodosControllers.getAll())

router.post('/', TodosControllers.create())

router.get('/:id', TodosControllers.findById())

router.patch('/:id', TodosControllers.update())

router.delete('/:id', TodosControllers.delete())

module.exports = router