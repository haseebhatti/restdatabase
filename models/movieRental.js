var connection = require('../connection');

function MovieRental () {
  // this is my get method,executed the query and sent back the results as the reposonse
  this.get = function (res) {
    connection.acquire(function (err, con) {
      con.query('select * from movies', function (err, result) {
        con.release();
        res.send(result);
      });
    });
  };
}
module.exports = new MovieRental();
