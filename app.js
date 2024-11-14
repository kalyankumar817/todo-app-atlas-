express=require('express')
mongoose=require('mongoose')
require('dotenv').config()
const cors=require('cors')
const todoRoutes=require('./routes/todoRoutes')

//middleware
const app=express();

//env file details
const port=process.env.PORT;
const mongouri=process.env.MONGODB_URI;

//connection
mongoose.connect(mongouri)
    .then(()=>console.log('connection established successfully'))
    .catch((err)=>console.log('Error in establishing connection',err))

//bodyparser to accept ,so install body-parser
app.use(express.json())
app.use(cors())

//route
app.use('/todos',todoRoutes)

//port
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})