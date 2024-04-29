function outer(){
    let a = "Hai LAkshmi Welcome"; 
    function inner(){
        console.log(a);
    }
    return inner;

}
const closer = outer();
closer();