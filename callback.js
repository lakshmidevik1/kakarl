function modify(arr,callback){
    arr.push(6)

    callback();
    
}
var arr= ([1,2,3,4,5])
modify (arr,function(){
console.log("Array Changes ",arr);
})
