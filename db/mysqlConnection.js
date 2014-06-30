var mysql      = require('mysql');


var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'tangent90',
        database : 'dust'
    });
}
else {
    var connection = mysql.createConnection({
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        port: process.env.RDS_PORT,
        database : 'dust'
    });
}


function fetch(req, res) {
    var sqlString =  "select * from users";
    connection.query(sqlString, function(err, result){
            if( err ){
                console.log(err);
            }
            res.write(JSON.stringify(result));
            res.end();
        }
    );
}

exports.fetch = fetch;