var { getConnection } = require('../database');

function deleteUser(req, res, next) {
    getConnection(function (err, connection) {
        if (err) {
          res.send({
            response: 'Error connecting to database. ' + err
          });
          next();
    
        } else {
          var sql = `DELETE FROM users WHERE nickname = '${req.params.nm}'`;
          console.log(sql);
    
          connection.query(sql, function (err, result) {
            if (err) {
              res.send({
                response: 'Error deleting user. ' + err
              });
            } else {
              res.send({
                result: 'ok'
              });
            }
    
            connection.release();
            next();
          });
        }
      });
}

module.exports.deleteUser = deleteUser;