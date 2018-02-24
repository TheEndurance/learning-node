var http = require('http');
var url = require('url');

function getTimeJSON(d){
    return {
        "hour" : d.getHours(),
        "minute":d.getMinutes(),
        "second":d.getSeconds() 
    };
}


var server = http.createServer(function(req,res){
    const Url = url.parse(req.url,true);
    let result;
    
    if (req.method!=='GET'){
        return res.end('GET only\n');
    }
    
    if (Url.pathname==='/api/parsetime'){
        const d = new Date(Url.query.iso);
        result = JSON.stringify(getTimeJSON(d));
        
    } else if (Url.pathname ==='/api/unixtime'){
        const epochTime = new Date(Url.query.iso).getTime();
        result = JSON.stringify({'unixtime':epochTime})
    }
    
    if (result){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(result);
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(Number(process.argv[2]));