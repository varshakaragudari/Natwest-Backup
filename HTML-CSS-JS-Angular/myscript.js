function show()
{
    cars.forEach(element => {
        console.log(element)
    });
    // console.log(cars)
}

let cars = [
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

function showData()
{
    console.log("first")
     setTimeout(() => {
        
            console.log(cars)
        
        
     }, 1000);
}

function getData(temp,callback)
{
   
    setTimeout(() => {
        console.log(" sec");
       
         cars.push(temp);
         callback();
    }, 3000);
}
let temp=
{
    "color": "blue",
    "type": "Sedan",
    "registration": new Date('2018-03-03'),
    "capacity": 5
}

getData(temp,showData);
 