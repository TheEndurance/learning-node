var net = require('net');


function now () {
  const d = new Date()
  
  return `${d.getFullYear()}-${d.getMonth() < 10 ? `0${d.getMonth()+1}` : `${d.getMonth()+1}`}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
}

var server = net.createServer(function(socket){
    socket.end(now() + "\n");
});

server.listen(Number(process.argv[2]));