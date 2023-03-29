var express = require('express');
var router = express.Router();
var espaciocontroller = require('../Controllers/espacio.c');

//listar (Funciona)
router.get('/', function(req,res,next){
    espaciocontroller.Listar()
    .then((respuesta)=>{
        res.render('espacio', {respuesta: respuesta});
    })
})

//agregar (Funciona)
router.post('/', function(req, res, next){
   espaciocontroller.Agregar(req.body)
    .then(()=>{
        espaciocontroller.Listar()
        .then((respt)=>{
            res.send(respt);
        })
    })
});

//Buscar por id (Funciona)
router.get('/:id', function(req,res,next){
    espaciocontroller.Buscar(req.params.id)
    .then((respt)=>{
        res.send(respt);
    })
})

//Actualizar
router.patch('/:id', function (req, res, next){
  espaciocontroller.Actualizar(req.params.id, req.body)
  .then((respt)=>{
    res.send(respt);
  })
})

//Eliminar por su ID (Funciona)
router.delete('/:id', function(req,res,next){
    espaciocontroller.Eliminar(req.params.id)
    .then((respt)=>{
        res.send(respt);
    })
})

module.exports = router;