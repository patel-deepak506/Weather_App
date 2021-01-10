const express = require('express');
const app = express();

const request = require('request');

const apiKey = "af1cb92ce1d31d1678e5df2549635c9a";
const cityName = 'mariahu';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
console.log(url);


app.get('/data',(req,response)=>{


    request(url, (err,res,body)=>{
        if (err) throw err;
        let whether = JSON.parse(body);
        // console.log(whether);
        response.write("<html><body><div>");
        response.write("<h1>" + "cityName==" + whether['name'] + "<br>" + "</h1>");
        response.write("<h2>" + "Temprature==" + whether.main['temp'] +"   *C"+ "<br>" +"</h2>" );
        response.write("<h2>"+ "SunShine==" + new Date(whether.sys['sunrise']*1000) + "<br>" + "</h2>" );
        response.write("<h2>"+ "SunSet==" + new Date(whether.sys['sunset']*1000) + "<br>" + "</h2>" );
        response.write("</div></body></html>")
        response.end();
    })

});

app.listen(2020,()=>{
    console.log("it is working");
})