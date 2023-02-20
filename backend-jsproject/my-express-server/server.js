//jshint esmodule:6

const express = require("express");
const app = express();


app.get("/",function( req , res){
    res.send("<h1>Hello World</h1>");
});

app.get("/contact",function( req , res){
    res.send("<h1>Contact Me at Tanmay@gmail.com</h1>");
});


app.get("/about",function(req,res){
    res.send("<h1>My Name is Tanmay Murkute</h1><br><p>I am Learning Nodejs and expressjs . I am Studying at TCET and i want to learn few things on my own </p>")
});

app.get("/hobbi",function(req,res){
    req.send("<h1>hello , welcome to my hobby</h1>")
});
app.listen(3000 ,function(){
    console.log("Server Started on port 3000");
});
