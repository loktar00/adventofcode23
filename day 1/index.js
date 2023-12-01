const fs = require('fs')

fs.readFile('data.txt', 'utf8' , (err, data) => {
    const inputData = [0];
    let inputIndex = 0;

    [...data.replace(/[\r]/g, '').split('\n')].forEach((data) => {
        if (data) {
            inputData[inputIndex] = data;
            inputIndex++;
        }
    });

    let sum = 0;
    const firstNumber = /^[^\d]*(\d+)/;
    
    inputData.forEach((data) => {
        let fn = data.split('').filter((item) => item.match(firstNumber))[0];
        let ln = data.split('').reverse().filter((item) => item.match(firstNumber))[0];
        sum += (parseInt(fn + ln));
    });

    console.log(sum);
});
