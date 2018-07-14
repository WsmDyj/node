const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,   //process 进程  stdin输入
    output: process.stdout,
});

rl.question('please input a word:', function (answer) {
    console.log("Your has entered [%s]", answer.toUpperCase());
    rl.close();
});

