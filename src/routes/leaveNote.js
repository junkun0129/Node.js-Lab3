const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const number = 1;

router.get("/leave-note", (req, res, next)=>{
    res.sendfile(path.join(__dirname, "..", "views", "leaveNote.html"));
})

router.post("/leave-note", (req, res, next)=>{
    // let body = "";
    

    fs.appendFile(path.join(__dirname, "message.txt"), req.body.title+":"+req.body.memo+" ", (err)=>{
       if(err){
        console.error(err)
       }
        
    } )
        
    

    res.send(`
    <h1> memo sent</h1>
    <a href="/admin/leave-note">leave-note</a>
    <a href="/read-note">read-note</a>
    `)
    
    
})

module.exports = router;
