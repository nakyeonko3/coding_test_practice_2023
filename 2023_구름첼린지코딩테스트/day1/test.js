const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input;
rl.on("line", (line) => {
    input = line;
    const [a, b] = input.split(" ").map((num) => parseInt(num));
    console.log(Math.floor(a * (1 + b / 30)));
    rl.close();
});

rl.on("close", () => {
    process.exit();
});
