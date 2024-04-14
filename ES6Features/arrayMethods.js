const items = [
    {
        name: 'Bike' ,price:100
    },
    {
        name: 'TV' ,price:200
    },
    {
        name: 'Album' ,price:10
    },
    {
        name: 'Book' ,price:5
    },
    {
        name: 'Phone' ,price:500
    },{
        name: 'Computer' ,price:1000
    },{
        name: 'Keyboard' ,price:25
    }

]

console.log(items);

const filterItems = items.filter((item)=>{
    return item.price <100   //based on true or false
})

console.log(filterItems);

const filterName = items.map((item)=>{
    return item.name   //maps names to index of array
})

console.log(filterName[2]);  //returns Album


const foundItems = items.find((item)=>{
    return item.price === 1000
})

console.log(foundItems);  //return Computer object



items.forEach((item)=>{
    console.log(item.name);
})

const inexpensiveItems = items.some((item)=>{
    return item.price <1000
})

console.log(inexpensiveItems);

const expensiveItems = items.every((item)=>{
    return item.price >=5
})

console.log(expensiveItems);



const total = items.reduce((currentTotal,item)=>{
    return item.price + currentTotal
} , 0)

console.log(total);

const arr=[1,2,3,4,5]
const includetwo = arr.includes(2)

console.log(includetwo);




