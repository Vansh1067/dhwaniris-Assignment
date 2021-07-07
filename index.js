//Import External Libraries
const express=require('express')
const mongoose = require('mongoose');
const bodyParser=require('body-parser')
const cors=require('cors')

//Import local files
const {mongoDbURL,port} =require('./config/keys')
const userRouter=require('./router/user')
const stateRouter=require('./router/state')
const districtRouter=require('./router/district')
const childRouter=require('./router/child') 

//Initialise App
const app=express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



app.use('/auth',userRouter)
app.use('/state',stateRouter)
app.use('/district',districtRouter)
app.use('/child',childRouter)  


app.use((error,req,res,next)=>{
    res.json({
        error:error
    })
}) 
mongoose.connect(mongoDbURL, {useNewUrlParser: true})
.then(result=>{
    console.log("Connect Database")
    app.listen(port,()=>{
        console.log("Start Server");
    })
    
})
