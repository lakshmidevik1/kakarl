
function mul(a){
    return function mul(b){
        var x=  a * b;
        console.log(x);
        
    }
}
var result = mul(5)(6);