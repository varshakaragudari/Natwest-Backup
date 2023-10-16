
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
    console.log("proimise has been resolved ...")
     setTimeout(() => {  
            console.log(cars) 
     }, 1000);
}

function getData(temp)
{
  return new Promise((resolve,reject)=>{

    setTimeout(() => {

        let error=false; 
        temp.forEach(element => {
            cars.push(element)
        });
        if(!error)
        {
            resolve()
             
        }
        else
        {
            reject("not added ");
        }
    },3000)
})
}
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


const a=getData(temp).then(showData).catch(err=>console.log(err))
console.log(a)

let pr = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});


    const print1=()=> console.log('Success, You are a GEEK');
    const print2=()=> console.log('Some error has occurred');

     
pr. then(print1).
catch(print2);