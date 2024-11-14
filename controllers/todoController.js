const Todo=require('../models/todoSchema')

//post
const createTodo=async(req,res)=>{
    try{
        const{title,description}=req.body
        const todo=await Todo.create({title,description,completed:true})
        await todo.save()
        res.status(200).json(todo)
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}

//get all todos
const getAll=async(req,res)=>{
    try{
        const todo=await Todo.find()
        res.status(200).json(todo)
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}

//get sepecfic todo by id
const getById=async(req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id)
        if(!todo){
           return res.status(404).json({msg:"todo not found"})
        }
        res.status(200).json(todo)
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}

//update todo by id
const updateTodo=async(req,res)=>{
    try{
        const{title,description}=req.body
        const update_todo=await Todo.findByIdAndUpdate(req.params.id,{title,description},{new:true})
        if(!update_todo){
           return res.status(404).json({msg:"todo not found"})
        }
        res.status(200).json(update_todo)
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}

//delete todo by id
const deleteTodo=async(req,res)=>{
    try{
        const delete_todo=await Todo.findByIdAndDelete(req.params.id)
        if(!delete_todo){
           return res.status(404).json({msg:"todo not found"})
        }
        res.status(200).json(delete_todo)
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}
module.exports={createTodo,getAll,getById,updateTodo,deleteTodo}