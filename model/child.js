const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const ChildSchema=new Schema({
    name:{type:Schema.Types.String,required:true},
    sex:{type:Schema.Types.String,required:true},
    dob:{type:Schema.Types.Date,required:true},
    fathername:{type:Schema.Types.String,required:[true,'Father Name is required']},
    mothername:{type:Schema.Types.String,required:true},
    stateId:{type:Schema.Types.ObjectId,required:true,ref:'state'},
    districtId:{type:Schema.Types.ObjectId,required:true,ref:'district'},



},{timestamps:true})


module.exports=mongoose.model('child',ChildSchema)