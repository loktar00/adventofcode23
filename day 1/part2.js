const fs = require('fs');
const { parse } = require('path');

fs.readFile('data.txt', 'utf8' , (err, data) => {
    const inputData = [0];
    let inputIndex = 0;

    [...data.replace(/[\r]/g, '').split('\n')].forEach((data) => {
        if (data) {
            inputData[inputIndex] = data;
            inputIndex++;
        }
    });

    const numberValues = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
        '1':'1',
        '2':'2',
        '3':'3',
        '4':'4',
        '5':'5',
        '6':'6',
        '7':'7',
        '8':'8',
        '9':'9'
    }

    // array of all numbers
    const wordArray = Object.keys(numberValues);
    let newData = new Array(inputData.length).fill(1).map(() => []);

    wordArray.forEach((word) => {
        inputData.forEach((data, idx) => {
            let str = data;
            let position = str.search(word);
            let offset = 0;
            
            while (position !== -1) {
                console.log(numberValues[word])
                newData[idx][position + offset] = '' + numberValues[word];
                offset += position + 1;

                str = str.substring(position + 1, str.length);
                position = str.search(word);
            }
        });
    });

    const noEmpties = newData.map(data => data.filter(item => item));
    const pairs = noEmpties.map(data => data.filter((_, idx) => idx === 0 || idx === data.length - 1));

    let sum = 0;
    pairs.forEach((data) => {
        sum += (parseInt(data[0] + '' + data[data.length - 1]));
        console.log(data[0], data[data.length - 1])
    });

    console.log(sum);
});
