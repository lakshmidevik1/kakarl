var string = " Hai Lakshmi Welcome";
var reverseString = reversebyseparator(string,"");
var reverseEachWord = reversebyseparator(reverseString," ");
function reversebyseparator (string, separator){
    return string.split(separator).reverse().join(separator)
}
console.log(reverseString);
console.log( reverseEachWord )