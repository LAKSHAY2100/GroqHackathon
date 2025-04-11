const express = require('express');
const jwt=require('jsonwebtoken')
const router = express.Router();
const bcrypt=require("bcrypt");
const z=require("zod");
require('dotenv').config();
let User=require("../models/user");
let News=require("../models/news");
let userAuth=require("../middlewares/authentication/user")

router.get("/",userAuth,async(req,res)=>{
    res.json({message:"news summary"})
});
module.exports=router;