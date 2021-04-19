var restify = require('restify');
var { addUser } = require('./add-user');
var { getUsers } = require('./get-users');

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/users', getUsers);
server.post('/users', addUser);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
