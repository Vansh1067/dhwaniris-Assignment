const District=require('../model/district')

//Get ALL District statewise
exports.getDistrict=(req,res,next)=>{
    const {stateId}=req.params
    if(!stateId){
        return next('Invalid Data')
    }
    console.log(stateId)
    District.find({stateId}).then((data)=>{
        if(data.length>0){
            res.json({
                message:'District Found',
                data
            })
        }else{
            next('No District Found')
            
        }
    }).catch(err=>next(err))
}
//Get ALL Districts 
exports.getAllDistrict=(req,res,next)=>{
    District.find({}).populate('stateId').then((data)=>{
        if(data.length>0){
            res.json({
                message:'District Found',
                data
            })
        }else{
            next('No District Found')
            
        }
    }).catch(err=>next(err))
}
//Add Districts
exports.addDistrict=(req,res,next)=>{
    const {stateId,name}=req.body
    if(!name||!stateId){
        return next('Invalid Data')
    }
    const district=name.toLowerCase()
    District.findOne({name:district,stateId}).then((data)=>{
        if(data){
            next('District Already Exist')
        }else{
            const dis=new District({name:district,stateId})
            dis.save().then((dis)=>{
                res.json({
                    message:'District Add SuccessFully',
                    data:dis
                })
            })
        }
    }).catch(err=>next(err))

}