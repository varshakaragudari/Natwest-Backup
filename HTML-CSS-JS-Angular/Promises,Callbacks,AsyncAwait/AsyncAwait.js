

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
let temp=[
    {
        "color": "blue",
        "type": "Sedan",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    },
    {
        "color": "black",
        "type": "SUV",
        "registration": new Date('2018-03-03'),
        "capacity": 5   
    }
    ] 
function showData()
{
    
     setTimeout(() => {  
        console.log("show data  called ")
            console.log(cars) 
     }, 1000);
}

function getData(temp)
{
 
    setTimeout(() => {
        console.log("getdata called ")
        temp.forEach(element => {
            cars.push(element)
        })
    },5000)
}


async function start()
{ 
    console.log("start called ")
    await getData(temp)
    showData()
}

start();
 