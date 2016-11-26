//Domain Name System (DNS)

//To resolve the domain name, we can call resolve4() for the IPv4 environment
// and resolve6() for the IPv6 environment.
var dns = require('dns');

dns.resolve6('www.pecollege.net', function (err, addresses) {
if (err)
console.log(err);
console.log('addresses: ' + JSON.stringify(addresses));
});
dns.lookup('www.pecollege.net', function (err, address, family) {
if (err)
console.log(err);
console.log('addresses: ' + JSON.stringify(address));
console.log('family: ' + JSON.stringify(family));
});
