

const connection = require('./connection');


module.exports = {
  selectAll: function(cb) {
    connection.query('SELECT * FROM burger', (err, results, fields) => {
      if (err) {
        throw err;
      }
      console.log(results);
      cb(results)
    })
  },
  insertOne: function(burger, cb) {
    connection.query('INSERT INTO burger SET ?', {
      burger_name: burger,
      devoured: false
    }, (err, results, fields) => {
      if (err) {
        throw err;
      }
      cb(results)
    })
  },
  updateOne: function(burger_id, cb) {
    connection.query('UPDATE burger SET ? WHERE ?', [{devoured: true}, {id: burger_id}],
  (err, results, fields) => {
    if (err) {
      throw err;
    }
    cb(results);
  })
  }
}
