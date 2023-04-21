var express = require('express');
var router = express.Router();
var tController = require("../controllers/equipo");
var validarToken = require('../authorization/validation')
var jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
    tController.Listar()
    .then((resp)=>{   
        res.render('EQUIPO', {resp: resp});
    })  
});


router.get('/sesion', validarToken, function(req, res, next) {
    var payload = jwt.decode(req.headers.authorization.replace('Bearer ', ''))
    if (payload.roles.includes("Admin")) {
        
          res.send('Has ingresado siendo Admin, bienvenido!')

        router.get("/:id", function(req, res, next) {
            tController.Buscar(req.params.id)
            .then((resp)=>{
                res.render('EQUIPO', {resp: resp});
                res.send(console.log(resp))
                })
        });

        //Insertar registros **
    router.post('/', function(req, res, next) {
        tController.Crear(req.body)
        .then((resp)=>{
            res.send(console.log(resp))
     })
    });
    //Actualizar Registros
    router.patch("/:id", function(req, res, next) {
        tController.Actualizar(req.params.id , req.body)
        .then((resp)=>{
            res.send(console.log(resp))
     })
    });
    //Eliminar Registros
    router.delete("/:id", function(req, res, next) {
        tController.Eliminar(req.params.id)
            .then((resp)=>{
                res.send(console.log(resp))
      })
    });
    }else if (payload.roles.includes("Personal")){
        res.send('Solo admin esta autorizado a realizar estas acciones!');
    }
})

//Consultar equipos





module.exports = router;
  