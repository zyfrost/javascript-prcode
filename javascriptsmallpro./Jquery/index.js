$("button").click(function(){
    $("h1").css("color","red");
});

// $("input").on(keypressfunction(){
//     console.log(event.key);
//     $("h1").text(event.key);
// })

$("button").on("click",function(){
    $("h1").hide();
})



$("button").html("<em>Dont click me </em>");

console.log($("img").attr("src"));

$("a").attr("href","https://www.yahoo.com")