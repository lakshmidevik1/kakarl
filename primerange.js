function isPrime(number){
    if(number<=1){
        return false
    }
    for(let i = 2;i<Math.sqrt(number);i++){
        if(number % i == 0){
            return false
        }
    }
    return true
}
function printPrimeNumbers(start,end){
    for(let i = start;i<=end;i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}
let start = 6;
let end = 30;
console.log(`prime numbers ${start} and ${end}`)
printPrimeNumbers(start,end)