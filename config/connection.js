const mysql = require('mysql');


// Setup the connection to the database.
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'burgers_db'
});

connection.connect((err) => {
  if (err) {
    console.error(`error connnecting ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.thread}`)
});

module.exports = connection;
