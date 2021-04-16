const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if(numsLeft > 0) {
        r1.question("Please enter a number: ", function(answer) {
            const number = parseInt(answer);
            sum += number;
            console.log(sum);
            addNumbers(sum, numsLeft -= 1, completionCallback);
        })
    } else {
        completionCallback(sum);
        r1.close();
    }
}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));