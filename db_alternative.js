const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

function customQuery(sql, callback) {
  connection.connect(function (error) {
    if (error) throw error;
    console.log("Tenemos acceso a la BD");
  });
  connection.query(sql, callback);
  return connection;
}

module.exports = connection;
