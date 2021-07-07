const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const DistrictSchema=new Schema({
    name:{type:Schema.Types.String,required:true},
    stateId:{type:Schema.Types.ObjectId,required:true,ref:'state'}

},{timestamps:true})


module.exports=mongoose.model('district',DistrictSchema)