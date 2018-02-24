const fs = require('fs');
const path = require('path');


const input = process.argv;
fs.readdir(input[2],filterFunc);

module.exports = function filterFunc(err,list){
    if (err){
        console.log(err);
    } else {
        const filtered = list.filter((item) => item.indexOf(`.${input[3]}`)!==-1);
        for(let i=0;i<filtered.length;i++){
            console.log(filtered[i]);
        }
    }
}