const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.get('/', TaskController.showTasks)
router.post('/add', TaskController.createTaskSave)

module.exports = router
