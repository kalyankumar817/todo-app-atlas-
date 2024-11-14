const express=require('express')
const todoController=require('../controllers/todoController')
const router=express.Router()

//creating Request
router.post('/',todoController.createTodo)
router.get('/get',todoController.getAll)
router.get('/:id',todoController.getById)
router.put('/:id',todoController.updateTodo)
router.delete('/:id',todoController.deleteTodo)

module.exports=router