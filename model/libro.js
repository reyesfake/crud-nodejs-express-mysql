module.exports={
    obtener:function (conexion,funcion){
        conexion.query("SELECT * FROM carros", funcion);
    },

    insertar:function (conexion, datos,funcion){
        conexion.query("INSERT INTO carros ( marca,modelo,año,placa,estado) VALUES (?,?,?,?,?)", [datos.marca,datos.modelo,datos.año,datos.placa,datos.estado],funcion);
    },

    retornarDatosID:function(conexion,id,funcion){
        conexion.query("SELECT * FROM carros WHERE id=?", [id], funcion);
    },

    borrar:function (conexion,id,funcion){
        conexion.query("DELETE FROM carros WHERE id=? ", [id], funcion);
    },

    update:function (conexion,datos,funcion){
        conexion.query("UPDATE carros SET marca=?,modelo=?,año=?,placa=?,estado=? WHERE id=? ", [datos.marca,datos.modelo,datos.año,datos.placa,datos.estado, datos.id], funcion);
    },


}