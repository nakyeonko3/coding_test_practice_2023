const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
let input = [];
let sum = 0;
let T, M;

rl.on("line", function (x) {
    count += 1;
    input.push(x);
    let n = parseInt(input[0]);

    if (count === n + 2) {
        rl.close();
    }
});

rl.on("close", function () {
    [T, M] = input[1].split(" ").map((num) => parseInt(num));
    sum = M;
    for (let i = 2; i < input.length; i++) {
        sum += parseInt(input[i]);
    }

    T = (Math.floor(sum / 60) + T) % 24;
    M = sum % 60;

    console.log(T, M);
    process.exit();
});

// rl.on("line", function)