var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT users.username FROM users', (error, data) => {
      if (error) {
        throw error;
      }
      callback(null, data);
    });
  },
  create: function (user, callback) {
    // console.log('user in CREATE MODEL ', user, ' type: ', typeof user)
    console.log('this is user data', user);
    db.query("INSERT INTO users(username) VALUES ('"+user.username+"');", (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('success!', JSON.stringify(result));
        callback(null, JSON.stringify(result));
      }
    });
  }
};
