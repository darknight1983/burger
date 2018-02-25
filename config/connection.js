const mysql = require('mysql');
let connection;

// Setup the connection to the database.
if (process.env.JAWSDB_URL) {
 connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'burgers_db'
  });
}


connection.connect((err) => {
  if (err) {
    console.error(`error connnecting ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.thread}`)
});

module.exports = connection;
