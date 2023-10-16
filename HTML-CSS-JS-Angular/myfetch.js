let mydata=[]

async function getData()
{
    const resp=await fetch('https://dummyjson.com/products')
    const data=await resp.json()
    mydata=data.products;
    const b=await showData()
}
const showData= async()=>{

    
  for(let temp of mydata)
  {
    const [a,b,c]=[temp.id,temp.title,temp.price];
    console.log(a+"  "+b+"  "+c)
  }
  console.log("-----------------------------")
  mydata.forEach((val)=>{
    console.log(val.id+"----"+val.title)
  })
 
}
const a=getData()
console.log(a)