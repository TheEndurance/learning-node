var fs = require('fs');
var path = require('path');

module.exports = function(dirName,fileNameExtension,callback){
    fs.readdir(dirName,function(err,data){
        if (err){
            callback(err,null);
        } else {
            const filtered = data.filter((item) => item.indexOf(`.${fileNameExtension}`)!==-1);
            callback(null,filtered);
        }
        
    });
}
