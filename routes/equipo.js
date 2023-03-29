var express = require('express');
var router = express.Router();
var tController = require("../controllers/equipo");

//Consultar equipos
router.get('/', function(req, res, next) {
    tController.Listar()
    .then((respuesta)=>{   
        res.render('EQUIPO', {respuesta: respuesta});
    
    })  
});
  //Consultar equipos por id
router.get("/:id", function(req, res, next) {
    tController.Buscar(req.params.id)
    .then((resp)=>{
        res.render('EQUIPO', {resp: resp});
        res.send(console.log(resp))
        })
});

//Insertar registros
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

module.exports = router;
  