const Child=require('../model/child')

// Get All Child Details
exports.getAllChild=(req,res,next)=>{
    Child.find({}).populate('stateId districtId').then(data=>{
        if(data.length>0){
            res.json({
                message:'Child Data Found',
                data
            })
        }else{
            next('No Child Found')
            
        }
    }).catch(err=>next(err))
}
// Get One Child Details by Child Id
exports.getChildDetails=(req,res,next)=>{
    const {childId}=req.params
    if(!childId){
        return next('Invalid Data')
    }
    Child.findById(childId).populate('stateId districtId').then(data=>{
        if(data){
            res.json({
                message:'Child Data Found',
                data
            })
        }else{
            next('No Child Found')
            
        }
    }).catch(err=>next(err))
}

//Add Child
exports.addChild=(req,res,next)=>{
    const {name,fathername,mothername,dob,sex,stateId,districtId,photoUrl}=req.body
    if(!name||!fathername||!mothername||!dob||!sex||!stateId||!districtId||!photoUrl){
        return next('Invalid Data')
    }
    Child.findOne({name:name?.toLowerCase(),fathername:fathername?.toLowerCase(),mothername:mothername?.toLowerCase(),dob,sex:sex?.toLowerCase(),stateId,districtId,photoUrl})
    .then(data=>{
        if(data){
            next('Child Data Already Exist')
        }else{
            const ch=Child({name:name?.toLowerCase(),fathername:fathername?.toLowerCase(),mothername:mothername?.toLowerCase(),dob,sex:sex?.toLowerCase(),stateId,districtId,photoUrl})
            ch.save().then(child=>{
                res.json({
                    message:"Child Add Successfully",
                    data:child
                })
            })
        }
    }).catch(err=>next(err))
}