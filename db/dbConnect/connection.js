var mysql = require('mysql');

var dbCon = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'rezzy'
});
dbCon.connect(function(err) {
  if (err) {
    console.log('error did not connect to rezzy CHECK YO self')
  }
  console.log('Connected to rezzy database BIG THIngs are COMING');
});

exports.dbCon = dbCon;
