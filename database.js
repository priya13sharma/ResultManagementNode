const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'127.0.0.1',
    database:'teacherlogin',
    user:'root',
    password:'priyasharma01398@!#'

});
connection.connect(function(error){
    if(error)
    {
           throw error;
    }
    else
    {
        console.log('connected succesfully.');
    }
});
module.exports=connection;