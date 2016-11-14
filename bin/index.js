require('./index');
var http = require('http');
const PORT = 41515;
function handleRequest(request, response){
    response.end('It Works!!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);
server.listen(PORT, function () {
    console.log('');
})
console.log('hello from Node.js');