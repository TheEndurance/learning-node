var fs = require('fs');

const fileName = process.argv;
const fileBuffer = fs.readFileSync(fileName[2]);
const fileContents = fileBuffer.toString();
const totalNewLines = fileContents.split('\n').length - 1;
console.log(totalNewLines);