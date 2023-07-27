var db = require('../db');
// console.log(db);

module.exports = {
  getAll: function (callback) {
    db.query('SELECT users.username, rooms.roomname, messages.text FROM messages INNER JOIN users WHERE messages.username_id = users.id INNER JOIN rooms where messages.roomname_id = roomname.id', (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
    // database.query(mysql query SELECT) (error,data) => {
    /**
     * if
     *  error
     *
     * else
     *  callback(null, data);
     */
  }, // a function which produces all the messages
  create: function (message, callback) {
    /* GET USERNAME FROM TABLE */
    console.log(message);
    db.query(`INSERT INTO messages (text, username_id, roomname_id) VALUES (${message.message})`, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
};



