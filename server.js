// server.js

var ws0 = require ('ws');

var srvr = new ws0.Server ({port: 8080});

srvr.on ('connection', function (ws, req) {
    
    ws.on ('message', function (data) {
        
        console.log (data);
    });
    ws.send ('hello from server');
});
