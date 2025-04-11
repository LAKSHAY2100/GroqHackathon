const express = require('express');
const jwt=require('jsonwebtoken')
const router = express.Router();
const bcrypt=require("bcrypt");
const z=require("zod");
require('dotenv').config();
let User=require("../models/user")
router.post('/signup',async (req,res)=>{
    const {firstname,email,password,age}=req.body
    const reqBody=z.object({
        firstname:z.string().min(5).max(30),
        email:z.string().email(),
        password:z.string().max(10),
        age:z.number()
    })

    const data=reqBody.safeParse(req.body)
    if(!data.success){
        return res.json({
            message:data.error
        })
    }

    let user=await User.findOne({email:email})

    if(user) {
        return res.json({message:"This email already exists"})
    }

    const hashedPassword=await bcrypt.hash(password,5)

    const newUser = new User({
        firstname,
        email,
        password: hashedPassword, 
        age,
    });

    await newUser.save();

    return res.json({message:"you are signed up"})


})

router.post('/signin',async (req,res)=>{
    const {email,password}=req.body
    let user=await User.findOne({email:email})

    if(!user){
        return res.json({message:"Invalid credentials"})
    }

    const match=await bcrypt.compare(password,user.password)

    if(!match){
        return res.json({message:"Invalid credentials"})
    }

    let token=jwt.sign({firstname:user.firstname,email:user.email,userid:user._id},process.env.JWT_SECRET)

    return res.json({message:token})

})

module.exports=router
