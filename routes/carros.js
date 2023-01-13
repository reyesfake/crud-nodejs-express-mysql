var express = require('express');
var router = express.Router();
const carrosController= require("../controller/carrosController");

/* GET home page. */
router.get('/', carrosController.index);
router.get('/crear', carrosController.crear);                       //redirecciona a la vista para agregar un registro
router.post('/',carrosController.guardar);                          //redirecciona a la vista principal
router.post('/eliminar/:id',carrosController.eliminar);             //elimina el registro
router.get('/editar/:id',carrosController.editar);                  //redirecciona a la vista editar
router.post('/actualizar',carrosController.actualizar);             //actualiza el registro

module.exports = router;
