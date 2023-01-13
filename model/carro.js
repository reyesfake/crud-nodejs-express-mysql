module.exports={

    //comunicacion a la base de datos para obtener los parametros de la tabla carros
    obtener:function (conexion,funcion){
        conexion.query("SELECT * FROM carros", funcion);
    },
    //comunicacion a la base de datos para poder insertar los parametros
    insertar:function (conexion, datos,funcion){
        conexion.query("INSERT INTO carros ( marca,modelo,año,placa,estado) VALUES (?,?,?,?,?)", [datos.marca,datos.modelo,datos.año,datos.placa,datos.estado],funcion);
    },
    //comunicacion a la base de datos para solicitar datos especificos y asi poder editar-actualizar 
    retornarDatosID:function(conexion,id,funcion){
        conexion.query("SELECT * FROM carros WHERE id=?", [id], funcion);
    },
    //comunicacion a la base de datos para para borrar un registro dentro de la tabla carros
    borrar:function (conexion,id,funcion){
        conexion.query("DELETE FROM carros WHERE id=? ", [id], funcion);
    },
    //comunicacion a la base de datos para actualizar los cambios realizados en un registro
    update:function (conexion,datos,funcion){
        conexion.query("UPDATE carros SET marca=?,modelo=?,año=?,placa=?,estado=? WHERE id=? ", [datos.marca,datos.modelo,datos.año,datos.placa,datos.estado, datos.id], funcion);
    },


}