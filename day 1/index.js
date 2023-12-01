const fs = require('fs')

fs.readFile('data.txt', 'utf8' , (err, data) => {
    const inputData = [0];
    let inputIndex = 0;

    // Read line by line
    [...data.replace(/[\r]/g, '').split('\n')].forEach((data) => {
        if (data) {
            inputData[inputIndex] += Number(data);
        } else {
            inputIndex++;
            inputData[inputIndex] = 0;
        }
    });

    const total = inputData.sort((a, b) => b - a).slice(0, 3).reduce((prev, cur) => prev + cur);

    console.log(total);
});
