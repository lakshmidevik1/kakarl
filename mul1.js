function mul(a){
    return function mul(b){
        return function mul(c){
            var x = a * b * c
        }
        console.log(x)
    }
}
var result = 3 * 4 * 5;
console.log(result)