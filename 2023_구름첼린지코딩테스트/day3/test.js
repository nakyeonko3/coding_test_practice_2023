const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
let input = [];
let sum = 0;

rl.on("line", function (x) {
    count += 1;
    input.push(x);
    let n = parseInt(input[0]);

    if (count === n + 1) {
        rl.close();
    }
});

rl.on("close", function () {
    for (let i = 1; i < input.length; i++) {
        let [num1, operator, num2] = input[i].split(" ");
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        if (operator == "+") {
            sum += num1 + num2;
        }
        if (operator == "-") {
            sum += num1 - num2;
        }
        if (operator == "*") {
            sum += Math.floor(num1 * num2);
        }
        if (operator == "/") {
            sum += Math.floor(num1 / num2);
        }
    }

    console.log(sum);

    process.exit();
});

// rl.on("line", function(x) {x} )
// 이 함수는 rl.close가 나오기 전까지 계속 반복해서 실행이 된다.
