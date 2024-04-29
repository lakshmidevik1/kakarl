const readline =require('readline')
const r1 = readline .createInterface({
    input:process.stdin,
    output:process.stdout

});

r1.question ('Enter ur age: ',(age) => {
    age = parseInt(age);
if(age>=18){
    console.log('You are old enough to drive' );
}
else{
    console.log(' wait for the number of years he needs to turn 18.');
}
r1.close();
});