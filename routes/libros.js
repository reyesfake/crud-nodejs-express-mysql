var express = require('express');
var router = express.Router();
const librosController= require("../controller/librosController");

/* GET home page. */
router.get('/', librosController.index);
router.get('/crear', librosController.crear);                       //redirecciona a la vista para agregar un registro
router.post('/',librosController.guardar);                          //redirecciona a la vista principal
router.post('/eliminar/:id',librosController.eliminar);             //elimina el registro
router.get('/editar/:id',librosController.editar);                  //redirecciona a la vista editar
router.post('/actualizar',librosController.actualizar);             //actualiza el registro

module.exports = router;
