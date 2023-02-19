//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https =require("https");
const app= express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
    
})


app.post("/",function(req,res){
    const fName = req.body.firstName;
    const sName=req.body.secondName;
    const email = req.body.email;
    console.log(fName,sName,email);

    const data = {
        members:[
            {
                email_address:email,
                status:"subscribed",
                merger_fields:{
                    FNAME:fName,
                    LNAME:sName
                }
            }
        ]
    };
    const jsonData =JSON.stringify(data);
    const url = "https://us18.api.mailchimp.com/3.0/lists/b0ef0906e4"

    const options={
        method:"POST",
        auth:"tanmay:7209fc460f886ac878cc5eedf7684ef5-us18"
    }

    const request = https.request(url,options,function(response){

        if(response.statusCode==200){
            res.sendFile(__dirname +"/sucess.html");
        } else{
            res.sendFile(__dirname +"/failure.html");
        }

       response.on("data",function(data){
        console.log(JSON.parse(data));
       })     
    })

    request.write(jsonData);
    request.end();
    
})

app.post("/failure",function(req,res){
    res.redirect("/");
})



app.listen(process.env.PORT || 3000,function(){
    console.log("server is running on the port 3000");
})


//7209fc460f886ac878cc5eedf7684ef5-us18
//Audience id - b0ef0906e4
/*
app.post is used to post information in console
then action and method is compulsary unless it wont work
and the app.use(express.static("public"))
app.use bodyparser.urlencoded({extended:true})
*/