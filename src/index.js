var restify = require('restify');
var { addUser } = require('./users/add-user');
var { getUsers } = require('./users/get-users');
var { deleteUser } = require('./users/delete-user');

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

// rutas - routes
server.get('/users', getUsers);
server.post('/users', addUser);
server.del('/users/:nm', deleteUser);
//server.put('/users/:nm', updateUser);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
