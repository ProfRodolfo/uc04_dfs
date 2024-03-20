const express = require('express')
const TaskController = require('../controllers/TaskControllers')
const router = express.Router()


router.get('/add', TaskController.createTask)
router.get('/', TaskController.createTask)

module.exports = router