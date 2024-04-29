var inputStack = [1,2,3,4];
var outputStack = [1,2,3,4];


function enqueue(stackInput, item){
    return stackInput.push(item);
}
function dequeue(stackInput, stackOutput){
    if (stackOutput.length <= 0){
        while(stackInput.length > 0){
            var elementToOutput = stackInput.pop();
            stackOutput.push(elementToOutput)
        }
    }
    return stackOutput.pop();
}
enqueue(inputStack,5);
var result = dequeue(inputStack,outputStack)
console.log(result)