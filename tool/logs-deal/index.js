const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream(__dirname + '/access.log')
});

rl.on('line', (line) => {
    const arr = line.split(' ');
    console.log('访问时间：%s %s，访问地址：%s', arr[0], arr[1], arr[13]);
});
