const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/read-note", (req, res, next)=>{
    //res.sendfile(path.join(__dirname,"..", "views", "readNote.html"));
    
    fs.readFile(path.join(__dirname, "message.txt"),"utf-8", (err, data)=>{
        if(err){
            console.error(err)
            return;
        }
        if(data){

            const dataArray = data.split(" ")
            console.log(dataArray)
            res.write(`
                <div class = "your-memo">your memo</div>
            `)
            
            dataArray.forEach((each)=>{
                const title = each.split(":")[0]
                const memo = each.split(":")[1]
                res.write(`
                <div class = "box">
                    <h1>title: ${title}</h1>
                    <h2>${memo}</h2>
                <div>
                `)
                
                res.write(`<style type="text/css">
                    body {
                        display:flex;
                        ustify-content: center;
                        align-items: center;
                        color:black
                    }
    
                    .your-memo{
                        color:red
                        font-size:500px;
                    }
                    .box{
                        margin-top: 10%;
                        width: 800px;
                        
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        background-color: rgb(34, 34, 99);
                       
                    }
                    h1{
                        color:aliceblue
                    }
                    h2{
                        color:aliceblue
                    }
                    </style>`);
            })

        }else{
            res.write(`
            <h1>no memo yet</h1>
            `)
        }
        // console.log(dataArray)
        res.end();
    } )
    
})


module.exports = router;