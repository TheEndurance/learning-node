var http = require('http');
var bl = require('bl');
let results = [];
let count = 0;

function printResults(arr){
    for (let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

function callHttp(index){
    http.get(process.argv[2+index],function(response){
        response.pipe(bl(function(err,data){
            if (err){
                console.log(err);
            } else {
                results[index] = data.toString();
                
                count++;
                if (count===3) {
                    printResults(results);
                }
            }
         }));
    })
}

for(let i=0;i<3;i++){
    callHttp(i);
 
}