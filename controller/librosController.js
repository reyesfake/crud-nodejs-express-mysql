var conexion= require('../config/conexion');
var libro = require('../model/libro');

module.exports={
    index:function(req,res){

        libro.obtener(conexion,function (err,datos){
            res.render('libros/index', {tittle: 'Aplicacion', libros:datos });
        });  
    },

    crear:function(req,res){
        res.render('libros/crear')
    },

    guardar:function(req,res){
        libro.insertar(conexion,req.body,function (err){
             res.redirect('/libros');
        });
    },

    eliminar:function(req,res){
            libro.borrar(conexion,req.params.id,function(err){
                res.redirect('/libros');
             });     
    },

   editar:function (req,res) {
        libro.retornarDatosID(conexion,req.params.id,function(err,registros){
            console.log(registros[0]);
            res.render('libros/editar', {libro:registros[0]});
        });  
    },

    actualizar:function name(req,res) {
        libro.update(conexion,req.body,function (err){ });
        res.redirect('/libros');
    }

}