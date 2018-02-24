var fs = require('fs');

const fileName = process.argv;
fs.readFile(fileName[2],myCallback)

function myCallback(err,data){
    const totalNewLines = data.toString().split('\n').length - 1;
    console.log(totalNewLines);
}