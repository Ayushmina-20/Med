const mongoose=require('mongoose');
const express = require('express');
const bcrypt=require('bcrypt');

const app = express();
const User= require('./model/userschema');
const doctor=require('./model/doctorschema');
app.use(express.json());

const DB='mongodb+srv://ayushmina:hospital@cluster0.3jluv.mongodb.net/hospital?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log('connection is successfull');
}).catch((err)=>{
    console.error('No connection');

});


app.get('/' , (req , res)=>{
    res.send(`Hello world`);
});
app.post('/allUsers',async(req,res)=>{
    console.log("hello Doctor")
    const user=await User.findOne({appdoc:req.body.email});
    console.log(user)
    res.send(user)
})
app.post('/userDetails',async(req,res)=>{
    console.log("hello users")
    const user=await User.findOne({email:req.body.email});
    console.log(user)
    res.send(user)
})
//For Doctor Signup
app.post('/docsignup',async(req ,res)=>{
    const{name,email,contact,password}=req.body;
    if(!name || !email || !contact || !password ){
        res.status(422).json({error:"please fill up"});
    }
   /* res.json({msg:"success"});*/
    console.log(name);
    try{
        const userExist=await doctor.findOne({email:email});
        if(userExist){
            res.status(422).json({error:"please fill new email  up"});
        }
        const user=new doctor({name,email,contact,password});
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        // now we set user password to hashed password
         user.password = await bcrypt.hash(user.password, salt);
        const userRegister=await user.save();
        if(userRegister){
            res.status(201).json({message:"user saved"});
        }
    }
    catch(err){
        console.log(err);
    }
});



//For Patient Signup
app.post('/signup',async(req ,res)=>{
    const{name,email,contact,password,appdoc}=req.body;
    if(!name || !email || !contact || !password || !appdoc ){
        res.status(422).json({error:"please fill up"});
    }
   /* res.json({msg:"success"});*/
    console.log(name);
    try{
        const userExist=await User.findOne({email:email});
        if(userExist){
            res.status(422).json({error:"please fill new email  up"});
        }
        const user=new User({name,email,contact,password,appdoc});
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        // now we set user password to hashed password
         user.password = await bcrypt.hash(user.password, salt);
        const userRegister=await user.save();
        if(userRegister){
            res.status(201).json({message:"user saved"});
        }
    }
    catch(err){
        console.log(err);
    }
});
//For Doctor login
app.post('/doclogin',async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"plz"});
        }

        const userLogin = await doctor.findOne({email:email});
        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password);
        if(!isMatch){
            res.status(400).json({error:"user error"});
        }
        else{
            res.json({message:"user signed in"});
        }
        }
        else{
            res.json({message:"user not signed in"});
        }
        

    }
    catch(err){
        console.log(err);
    }
});

//For patient login

app.post('/login',async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"plz"});
        }

        const userLogin = await User.findOne({email:email});
        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password);
        if(!isMatch){
            res.status(400).json({error:"user error"});
        }
        else{
            res.json({message:"user signed in"});
        }
        }
        else{
            res.json({message:"user not signed in"});
        }
        

    }
    catch(err){
        console.log(err);
    }
});



app.listen(3001, ()=>{
    console.log('kaddy daddy working fine');
})