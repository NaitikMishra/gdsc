const express= require('express');
const severless = require("serverless-http");
const app = express()
const router = express.Router();
const fs = require("fs");
router.get("/",(req,res)=>{
  fs.readFile("./info.json","utf8",(err,data)=>
  {
     res.json(data);
  });
})
/*app.get("/",(req,res)=>{
    fs.readFile("./info.json","utf8",(err,data)=>
    {
      res.end(data);
    });
});
app.listen(port,()=>{
    console.log("server set up at port"); 
})*/
app.use("/.netlify/functions/api",router);
module.exports.handler = severless(app);