const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use("view engine","ejs");
app.get("/",function(req,res){
var today = new Date();
var options={
weekday:"long",
day:"numeric",
month:"long"

};
var day = today.toLocaleDateString("en-US",options);

res.render("list",{kindofDay:day});
});
app.post
app.listen(3000,function(){
console.log("Server started on port 3000");
});