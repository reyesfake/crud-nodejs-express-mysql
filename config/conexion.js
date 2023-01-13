var mysql= require("mysql");

//conexion a la base de datos

//PONER UN USER Y PASSWORD PARA INGRESAR A LA BASE DE DATOS

var con= mysql.createConnection({
    host: 'localhost',
    user: 'userprueba',
    password: '123456',
    database: 'carrosbd'
});
//comprobar si conecta a la base de datos
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