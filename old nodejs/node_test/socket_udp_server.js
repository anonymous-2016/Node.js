//socket UDP server>User Datagram Protocol >(面向无连接 :connectionless-oriented )
// Pass the parameter udp4 for the IPv4 environment or 
//udp6 for the IPv6 environment.

var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var message = 'this server message';

server.on('message', function (data, client) {
console.log('received data: ' + data);
console.log('client ' + client.address + ':' + client.port);
});

server.on('listening', function () {
var address = server.address();
console.log('server listening on ' + address.address + ':' +
address.port);
});
server.bind(9094);