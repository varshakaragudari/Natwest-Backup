const express =require('express')
const app=express();

const cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
]

app.use((req,res,next)=>{
    console.log("first middleware ");
    req.mySirname="kalagi"
    next();
})

app.get('/home',(req,res)=>{
    const html= `
    <ul>
    ${
        cars.map((temp)=>
            `<li>${temp.color}</li>`
        ).join("")
    }
    </ul>`;
    res.send(html)
});

app.get('/about',(req,res)=>{
    res.send("Hello This is about page "+req.mySirname)
});

app.get('/help',(req,res)=>{
   return res.json(cars)
});
app.listen(8080);