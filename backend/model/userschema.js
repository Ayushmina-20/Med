const mongoose =require('mongoose');
//const bcrypt=require('bcrypt');

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
        appdoc:{
            type:String,
            required:true
        },
        Temperature:[
             {
                temp:{
                type:Number,
                required:true}
            }
        ],
        Oxygen:[
            {
               oxy:{
               type:Number,
               required:true}
           }
       ],
       Pulse:[
        {
           pulse:{
           type:Number,
           required:true}
       }
   ],
   BloodPressure:[
    {
       bp:{
       type:Number,
       required:true}
   }
]
    }
);


const User =mongoose.model('patient',userSchema);
 module.exports=User;