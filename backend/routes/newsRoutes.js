const express = require('express');
const jwt=require('jsonwebtoken')
const router = express.Router();
const bcrypt=require("bcrypt");
const z=require("zod");

require('dotenv').config();
let User=require("../models/user");
let News=require("../models/news");
let userAuth=require("../middlewares/authentication/user")
router.post("/", userAuth, async (req, res) => {
    try {
      const { transcription, inputType, videoUrl, originalText, status } = req.body;
      const userId = req.user.userid;

      
      if (!inputType || !['text', 'video'].includes(inputType)) {
        return res.status(400).json({ message: "Invalid input type" });
      }
  
      if (!transcription) {
        return res.status(400).json({ message: "Transcription text is required" });
      }
  
      
      let summarizedText = ""; 
  
      
  
      
      const newsItem = new News({
        userId,
        inputType,
        videoUrl: videoUrl || null,
        originalText: originalText || null,
        transcription,
        summarizedText, // placeholder for now
        status: status || 'completed',
      });
  
      await newsItem.save();
  
      res.status(201).json({
        message: "News summary stored successfully",
        data: newsItem,
      });
    } catch (err) {
      console.error("Error saving news:", err);
      res.status(500).json({ message: "Server error" });
    }
  });

  
module.exports=router;