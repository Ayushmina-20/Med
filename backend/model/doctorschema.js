const mongoose =require('mongoose');
const userSchema=new mongoose.Schema(
    {
        name : {
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        contact:{
            type:Number,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        
    }
);


const doctor =mongoose.model('doctor',userSchema);
 module.exports=doctor;