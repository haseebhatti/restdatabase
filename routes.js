var movieRental = require('./models/movieRental');

module.exports = {
  configure: function (app) {
    app.get('/movies/', function (req, res) {
      movieRental.get(res);
    });
  }
};
