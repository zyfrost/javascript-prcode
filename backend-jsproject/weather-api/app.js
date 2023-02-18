//jshint esversion:6

const express = require("express");

const https =require("https");

const bodyParser = require("body-parser");

const app= express();

app.use(bodyParser.urlencoded({extended:true}));
 



app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html");
    

    
})

app.post("/",function(req,res){
    
    const query= req.body.cityName;
    const apiKey ="67defe4f8cc82aefa1dd986d3d786ca3";
    const units ="metric";
    
    const url ="https://api.openweathermap.org/data/2.5/weather?appid="+ apiKey+ "&q="+query+"&units="+units+"";
    

    https.get(url,function(response){
        

        response.on("data",function(data){

            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgUrl=" http://openweathermap.org/img/wn/"+ icon +"@2x.png"
            
            res.write("<h1>the Temperature of "+query+" is "+temp+"</h1>")
            res.write("<h3>and the Weather description in "+ query +" is "+description+"</h3>");
            res.write("<img src="+imgUrl+">");
            res.send( ); 
        });
    })

})










app.listen(3000,function(){
    console.log("Server is Started on port 3000");
})