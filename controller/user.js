const User=require('../model/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config/keys');


// User Login
exports.login=(req,res,next)=>{
    const {username,password}=req.body;
    if(!username||!password){
        return next('Invalid Data')
    }
    User.findOne({username:username}).then(data=>{
        if(data){
            console.log(data)
            bcrypt.compare(password,data.password)
            .then(match=>{
                if(!match){
                    next('Invalid username and Password')
                }else{
                    const token=jwt.sign({userId:data._id},JWT_SECRET);
                    res.json({
                        token:token,
                        username:data.username
                    })
                }

            })
        }else{
            
            next("Invalid User")
        }
        
    }).catch(err=>{next(err)})

}

//User logout
exports.logout=(req,res,next)=>{
    res.json({
        message:"User logout successfully"
    })
}
//Add User
exports.addUser=(req,res,next)=>{
    const {username,password}=req.body;
    
    User.find({username:username}).then(data=>{
        if(data.length){
           next("User already Exists");
           return
        }else{
            bcrypt.hash(password,12).then(hash=>{
               
                const NewUser=new User({username,password:hash});
                NewUser.save().then((user)=>{
                    res.json({
                        message:'User Created successfully',
                        user:user
                    })
                })
               
            })
        }
        
        
    }).catch(err=>{console.log(err);next(err)})
}