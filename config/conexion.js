var mysql= require("mysql");
var con= mysql.createConnection({
    host: 'localhost',
    user: 'userprueba',
    password: '123456',
    database: 'carrosbd'
});

con.connect(
    (err)=>{
        if(!err){
            console.log('Conexion establecida')
        } else{
            console.log('Error de conexion')
        }
    }
);

module.exports=con;