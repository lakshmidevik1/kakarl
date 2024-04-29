function removesDuplicate(array){
    return Array.from(new Set(array))
}
const names = ["Lucky", "Lakshmi", "Lakshmi1", "Divya", "Divya", "Kakarla"];
const result = removesDuplicate(names);
console.log(result) ;
const arrr = [1,2,[3,6],4,5]
const b = arrr.flatMap()
console.log(b)
 