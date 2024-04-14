// const User = new Object()

const user = {}

user.name="lokesh"

user.age=22

user.isLoggedIn = false
console.log(user);

const obj1 = { a:1,b:2}

const obj2 = { c:3,d:4}
const obj3 = { e:33,f:43}

const obj4 = Object.assign({},obj1,obj2,obj3)

console.log(obj4);

//keys,values,length,entries

//hasOwnProperty

// Objects Destructing

const {age:a}=user

console.log(a);