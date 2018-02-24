var filter = require('./module.js');
const dirName = process.argv[2]
const filterExt = process.argv[3];

filter(dirName,filterExt,function(err,list){
    if (err){
        console.log(err);
    }else {
        for(let i=0;i<list.length;i++){
            console.log(list[i]);
        }
    }
});

