var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req,res,next){       //ejecuta el router
  res.redirect('/libros');                    //redireciona a la vista principal
});

module.exports = router;
