const jwt=require('jsonwebtoken')

const {JWT_SECRET}=require('../config/keys')


const user=require('../model/user')
module.exports=(req,res,next)=>{
    const {authorization}=req.headers
    
    if(!authorization){
        return res.status(401).json({error:{message:"You must be logged in"}})

    }
    const token=authorization.replace("Bearer ","");
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({error:{message:"You must be logged in"}})

        }

        const {userId}=payload;
        user.findById(userId).then(userData=>{
            console.log(userData)
            
            req.user=userData._id
            req.username=userData.username
            next();

        })
    })
}