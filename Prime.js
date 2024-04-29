//Create a program that checks if a number is a prime number.
function isPrime(number){
    if(number<=1)
    {
        return false
    }
    for(let i = 2;i<=Math.sqrt(number);i++){
        if(number % i ==0)
        {
            return false
        }

    }
    return true;
}
let num = 17
console.log(num + "is" +(isPrime(num)?"a prime":"not a prime"));