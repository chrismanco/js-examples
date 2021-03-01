var restify = require('restify');

var server = restify.createServer();
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.bodyParser());

server.post("/hello", function (req, res, next) {
    if (req.body.message && req.body.user) {
        var text = req.body.message;
        var user = req.body.user;
        console.log(user + ": " + text);

        res.send({ response: "OK" });
    } else {
        res.send(400, { response: "Incorrect JSON structure" });
    }
    return next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
