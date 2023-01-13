var conexion= require('../config/conexion');
var carro = require('../model/carro');

module.exports={
    index:function(req,res){

        carro.obtener(conexion,function (err,datos){
            res.render('carros/index', {tittle: 'Aplicacion', carros:datos });
        });  
    },

    crear:function(req,res){
        res.render('carros/crear')
    },

    guardar:function(req,res){
        carro.insertar(conexion,req.body,function (err){
             res.redirect('/carros');
        });
    },

    eliminar:function(req,res){
            carro.borrar(conexion,req.params.id,function(err){
                res.redirect('/carros');
             });     
    },

   editar:function (req,res) {
        carro.retornarDatosID(conexion,req.params.id,function(err,registros){
            console.log(registros[0]);
            res.render('carros/editar', {carro:registros[0]});
        });  
    },

    actualizar:function name(req,res) {
        carro.update(conexion,req.body,function (err){ });
        res.redirect('/carros');
    }

}