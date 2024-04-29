//includes
const arr = [1,2,3,4,5]
console.log(arr.includes(5))
//forEach
let array = [1,2,3,4,5,6]
array.forEach(item => {
    console.log(item)
})
//filtered
const filtered = arr.filter(num => num > 3);
console.log(filtered)
//Map
const oneAdded = arr.map(Math.sqrt)
console.log(oneAdded);
console.log(arr)
//reduce
const sum = arr.reduce(((total,value) => total+value),1);
console.log(sum);
//some()
const largeNum = arr.some(num => num>9)
console.log(largeNum)
//every()
const num = arr.every(num =>num>0)
console.log(num)
 //sort
descOrder = arr.sort((a,b) => a>b? -1:1); 
console.log(descOrder) 
//Array.from()
const name1= 'Lakshmi' 
const nameArray = Array.from(name1); 
console.log(name1)
console.log(nameArray)
//Array.of()
const nums = Array.of(4,8,9,4,3,2)
console.log(nums)
//join()
const name = ['La','k','s',"hmi"]
console.log(name.join(','))
//to string
const fruits = ["banana","apple","mango"]
console.log(fruits.toString()) 
//unshift
fruits.unshift("kiwi")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.push("anzure")
console.log(fruits)
fruits.shift()
console.log(fruits)
console.log(arr.length)
array.splice(-1, 1,"Hai","hello")

array.concat([7,8,9,10])
console.log(array)
let names = ['l','k','s','h','i']
console.log(names.slice (-3) )
console.log(names.indexOf("k"))
const arrr = [1,2,[3,6],4,5]
const b = arrr.flat()
console.log(b)