var express = require('express');
var router = express.Router();
var tController = require("../controllers/trabajo");  //Ruta para realizar la funcion seleccioanda

//Consultar Trabajos
router.get('/', function(req, res, next) {
    tController.Listar()
    .then((respuesta)=>{   
        res.render('trabajo', {respuesta: respuesta});
    
    })  
});
//Consultar algun Trabajo por id
router.get("/:id", function(req, res, next) {
    tController.Buscar(req.params.id)
    .then((resp)=>{
        res.render('trabajo', {resp: resp});
        res.send(console.log(resp))
    
    })
});

//Crear Trabajos
router.post('/', function(req, res, next) {
    tController.Crear(req.body)
    .then((resp)=>{
        res.send(console.log(resp))
    })
});
+
//Actualizar Trabajos
router.patch("/:id", function(req, res, next) {
    tController.Actualizar(req.params.id , req.body)
    .then((resp)=>{
        res.send(console.log(resp))
    })
});

//Eliminar Trabajos
router.delete("/:id", function(req, res, next) {
    tController.Eliminar(req.params.id)
    .then((resp)=>{
        res.send(console.log(resp))
    })
});

module.exports = router;
  