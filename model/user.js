const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    username:{type:Schema.Types.String,required:true},
    password:{type:Schema.Types.String,required:true},
    

},{timestamps:true})


module.exports=mongoose.model('user',UserSchema)