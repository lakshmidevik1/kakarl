var Array = [1,2,3];
function greet(param){
    if(typeof param === 'String'){
        console.log('Not Array');
    }
if(Array.isArray(param)){
    console.log('Array');
}
else{
    console.log('Not Array');
}
    }