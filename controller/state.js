const State=require('../model/state')
//Get ALL States
exports.getAllState=(req,res,next)=>{
    State.find({}).then(data=>{
        if(data.length>0){
            res.json({
                message:'State Fetch successfully',
                data
            })
        }else{
            next('No State exist')
        }
    }).catch(err=>next(err))
}
//Add State
exports.addState=(req,res,next)=>{
    const {name}=req.body
    if(!name){
        return next('Invalid Data')
    }
    const state=name.toLowerCase()
    console.log(name,state)
    State.findOne({name:state}).then(data=>{
        console.log(data)
        if(data){
            next('State Already Exist')
            return
        }else{
            const S=new State({name:state})
            S.save().then((data)=>{
                res.json({
                    message:'State Add Successfully',
                    data
                })
            })
        }
    }).catch(err=>next(err))
}