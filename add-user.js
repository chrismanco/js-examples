var { getConnection } = require('./database');

function addUser(req, res, next) {
  if (!req.body.apodo || !req.body.edad) {
    res.send({
      response: 'Body structure is incorrect'
    });
    next();
    return;
  }

  getConnection(function (err, connection) {
    if (err) {
      res.send({
        response: 'Error connecting to database. ' + err
      });
      next();

    } else {
      var sql = `INSERT INTO users (nickname, age) VALUES ('${req.body.apodo}', ${req.body.edad})`;
      console.log(sql);

      connection.query(sql, function (err, result) {
        if (err) {
          res.send({
            response: 'Error inserting user. ' + err
          });
        } else {
          res.send({
            response: 'User inserted'
          });
        }

        connection.release();
        next();
      });
    }
  });
}

module.exports = {
  addUser: addUser
}
